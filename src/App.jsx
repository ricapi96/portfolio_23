// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import StacksPage from "./pages/StacksPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <div className="main-content">
          
          <Routes>
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/stacks" element={<StacksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
        {/* <div className="quote">
          <p>
            "Two roads diverged in a wood, and I— I took the one less traveled
            by, And that has made all the difference."
          </p>
          <p>- Robert Frost</p>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
