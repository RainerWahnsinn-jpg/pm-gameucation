import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">🏠 Dashboard</Link></li>
          <li><Link to="/learn-dashboard">📚 Learn Dashboard</Link></li>
          <li><Link to="/learnings">📖 Meine Learnings</Link></li>
          <li><Link to="/projektmanagement-dashboard">🎮 PM-Spiele</Link></li>
          <li><Link to="/pm-topics">📂 PM-Themenübersicht</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
