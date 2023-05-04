import React from "react";
import "./App.css";
import Forums from "./components/Forums/Forums";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinUs from "./components/Home/JoinUs";

function App() {
  const catagories = [
    "Bitcoin",
    "Blockchain",
    "Ethereum",
    "Altcoins",
    "DeFi",
    "Policy & Regulation",
    "Adoption",
  ];

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/forums" element={<Forums />} />
          <Route path="/news" element={<News />} />
          {catagories.map((catagory, index) => {
            <Route path={`/${catagory.toLowerCase()}`} element={<News />} />;
          })}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
