import React, { useState } from "react";
import "./CreatePoll.css";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([{ name: "", address: "" }]);

  // Function to add a new candidate input field
  const addCandidate = () => {
    setCandidates([...candidates, { name: "", address: "" }]);
  };

  // Function to handle form submission (for now, just navigates to the poll page)
  const handleCreatePoll = () => {
    navigate("/Parties"); // Change "/poll" to the actual poll page route
  };

  return (
    <div className="create-poll-container">
      <div className="form-box">
        <h2>Create a Poll</h2>

        <label>Poll Name</label>
        <input type="text" placeholder="Enter name of party" />

        <label>About</label>
        <textarea placeholder="Write about the poll..."></textarea>

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <label>Wallet Address</label>
        <input type="text" placeholder="Enter wallet address" />

        <h3>Add Candidates</h3>
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-box">
            <input type="text" placeholder="Candidate Name" />
            <input type="text" placeholder="Candidate Address" />
          </div>
        ))}

        <button className="add-btn" onClick={addCandidate}>
          + Add Candidate
        </button>

        <button className="create-btn" onClick={handleCreatePoll}>
          Create Poll
        </button>
      </div>
    </div>
  );
};

export default CreatePoll;
