import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">🏠 Dashboard</Link></li>
          <li><Link to="/learn">📚 Learnings</Link></li>
          <li><Link to="/learn/projektmanagement">🧩 PM Themen</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
