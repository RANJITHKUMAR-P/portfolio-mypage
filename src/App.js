import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import './App.css';
import Freelance from './pages/Freelance';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;