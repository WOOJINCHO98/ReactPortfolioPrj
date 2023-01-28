import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Preloader from "../src/components/Pre";
import Home from './components/Home/Home.js';
import Project from './components/Projects/Project.js';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "./components/ScrollTop.js"

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <ScrollTop />
      <Footer />
    </Router>

    );
}

export default App;
