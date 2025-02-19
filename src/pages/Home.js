import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the LetVote System</h1>
        <p>Create polls and let people vote seamlessly.</p>
        <button className="create-poll-btn" onClick={() => navigate("/CreatePoll")}>
          Create a Poll
        </button>
      </div>
    </div>
  );
};

export default Home;
