import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = (event) => {
    console.log("Current Target:", event.currentTarget);
    console.log("Clicked Target:", event.target);
    auth.logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">
        🦄 <strong>PM-Gameucation</strong>
      </div>

      <nav className="navigation">
        <Link to="/">Home</Link>
      </nav>

      <div className="login-status">
        {auth.isAuthenticated ? (
          <div className="login-container">
            <span className="status">Eingeloggt</span>
            <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}
