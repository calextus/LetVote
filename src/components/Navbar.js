import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = accounts[0];
        setWalletAddress(`${address.slice(0, 6)}...${address.slice(-4)}`); // Show short address
      } catch (error) {
        console.error("Wallet connection failed", error);
      }
    } else {
      alert("MetaMask not detected. Please install it!");
    }
  };

  return (
    <nav className="navbar">
       <div className="logo">YourLogo</div>
      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Parties">Parties</Link></li> 
      </ul>
      <button className="wallet-btn" onClick={connectWallet}>
        {walletAddress ? walletAddress : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
