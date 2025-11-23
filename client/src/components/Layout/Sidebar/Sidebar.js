import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="circle">WT</div>
        <div>
          <div className="logo-title">WovenTales</div>
          <div className="logo-sub">Where stories grow together</div>
        </div>
      </div>

      <ul className="menu">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/editor">✍️ Create Story</Link></li>
        <li>🌳 My Stories</li>
        <li>⭐ Favorites</li>
        <li><Link to="/blogs">📝 Blog</Link></li>
        <li>🔍 Search</li>
        <li>📂 Explore</li>
        <li><Link to="/profile">👤 Profile</Link></li>
        <li>⚙️ Settings</li>
      </ul>

      <div className="footer">© {new Date().getFullYear()} WovenTales</div>
    </aside>
  );
}
