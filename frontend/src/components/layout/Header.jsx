import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  // Darkmode-Status speichern & abrufen
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Effekt zum Anwenden des Darkmode
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header className="container" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      padding: "0.75rem 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "var(--background-color)"
    }}>
      <div className="logo">
        <Link to="/"><strong>🦄 PM-Gameucation</strong></Link>
      </div>

      <nav className="navigation" style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/learn">Learnings</Link>
        <Link to="/spiele">Spiele</Link>
      </nav>

      <div className="header-actions" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <button className="darkmode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        {auth.isAuthenticated ? (
          <>
            <span className="status">👤 Eingeloggt</span>
            <button className="logout-button secondary" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login"><button className="login-button">Login</button></Link>
        )}
      </div>
    </header>
  );
}
