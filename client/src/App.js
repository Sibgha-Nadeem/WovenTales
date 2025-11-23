import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Topbar from "./components/Layout/Topbar/Topbar";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard.js";
import StoryEditor from "./components/Story/StoryEditor/StoryEditor";
import ProfilePage from "./components/Profile/ProfilePage";
import BlogList from "./components/Blog/BlogList";
import BlogPage from "./components/Blog/BlogPage";
import BlogEditor from "./components/Blog/BlogEditor";

export default function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ flex: 1 }}>
          <Topbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/editor" element={<StoryEditor />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* BLOG ROUTES */}
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogPage />} />
            <Route path="/blogs/write" element={<BlogEditor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
