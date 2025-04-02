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
            <Link to="/learning-dashboard">📚 Lernen</Link>
          </li>
          <li>
            <Link to="/projektmanagement-dashboard">⚙️ PM Games</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
