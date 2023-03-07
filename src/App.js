import React from "react";
import "./App.css";
import Forums from "./components/Forums/Forums";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/forums" element={<Forums />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
