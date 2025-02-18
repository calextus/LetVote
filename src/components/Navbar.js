import React, { useState } from "react";
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
      <div className="logo">LetVote</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Parties</a></li>
      </ul>
      <button className="wallet-btn" onClick={connectWallet}>
        {walletAddress ? walletAddress : "Connect Wallet"}
      </button>
    </nav>
  );
};

export default Navbar;
