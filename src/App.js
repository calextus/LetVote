import React from "react";
import "./App.css";  
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>Welcome to LetVote - Decentralized Voting System</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
