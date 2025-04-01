import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">🏠 Dashboard</Link>
          </li>
          <li>
            <Link to="/learn-dashboard">📚 Lernen </Link>
          </li>
          <li>
            <Link to="/projektmanagement-dashboard">🎮 PM-Spiele</Link>
          </li>
          <li>
            <Link to="/pm-topics">📂 PM-Deep Dive</Link>
          </li>
          <li>
            <Link to="/learnings">📖 Meine Learnings</Link>
          </li>
          {/* ✅ Neu hinzugefügt */}
        </ul>
      </nav>
    </aside>
  );
}
