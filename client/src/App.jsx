import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import TablePage from "./components/TablePage";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="body-flex">
        <div className="boby-content">
          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>} />
            <Route path="/table" element={<TablePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
