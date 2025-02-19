import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PartyList from "./pages/Parties";
import CreatePoll from "./pages/CreatePoll";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/parties" element={<PartyList />} />
        <Route path="/CreatePoll" element={<CreatePoll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
