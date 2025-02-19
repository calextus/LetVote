import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePoll.css"; // Import CSS file

const CreatePoll = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([
    { name: "", address: "", image: null },
  ]);

  // Add new candidate field
  const addCandidate = () => {
    setCandidates([...candidates, { name: "", address: "", image: null }]);
  };

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index][field] = value;
    setCandidates(updatedCandidates);
  };

  // Handle poll creation
  const handleCreatePoll = () => {
    navigate("/Parties"); // Redirect to Poll Page
  };

  return (
    <div className="poll-container">
      <div className="poll-box">
        {/* Left - Poll Form */}
        <div className="poll-form">
          <h2>Create a Poll</h2>

          {/* Upload Background Image */}
          <div className="upload-btn">
            <button>Upload Background</button>
          </div>

          <input
            type="text"
            placeholder="Enter name of party"
            className="input-field"
          />

          <textarea
            placeholder="Write..."
            className="input-field textarea"
          ></textarea>

          <div className="date-fields">
            <input type="date" className="input-field" />
            <input type="date" className="input-field" />
          </div>

          <input
            type="text"
            value="35433tfg4..."
            className="input-field disabled"
            disabled
          />

          <h3>Add Candidates:</h3>
          {candidates.map((candidate, index) => (
            <div key={index} className="candidate-box">
              <input
                type="text"
                placeholder="Enter name"
                className="input-field"
                value={candidate.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Enter address"
                className="input-field"
                value={candidate.address}
                onChange={(e) =>
                  handleInputChange(index, "address", e.target.value)
                }
              />
              <button className="upload-btn">Add Image</button>
            </div>
          ))}

          <button className="add-more-btn" onClick={addCandidate}>
            + Add More Candidates
          </button>

          <button className="create-btn" onClick={handleCreatePoll}>
            Create
          </button>
        </div>

        {/* Right - Images */}
        <div className="poll-images">
          <img src="vote1.jpg" alt="vote" />
          <img src="vote2.jpg" alt="vote" />
          <img src="vote3.jpg" alt="vote" />
          <img src="vote4.jpg" alt="vote" />
          <img src="vote5.jpg" alt="vote" />
          <img src="vote6.jpg" alt="vote" />
        </div>
      </div>
    </div>
  );
};

export default CreatePoll;
