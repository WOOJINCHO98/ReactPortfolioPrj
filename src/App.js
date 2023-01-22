import React, {useState, useEffect} from 'react';
import './App.css';
import Preloader from "../src/components/Pre";
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Project.js';
import Navbar from "./components/Navbar";
import {  BrowserRouter as Router,
Route, Routes} from 'react-router-dom'
import "./style.css";
import Footer from './components/Footer';

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
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </Router>

    );
}

export default App;
