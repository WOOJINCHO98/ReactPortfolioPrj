import './App.css';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Project.js';
import Navbar from "./components/Navbar";
import {  BrowserRouter as Router,
Route, Routes} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>

    );
}

export default App;
