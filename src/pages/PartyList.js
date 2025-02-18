import React, { useState } from "react";
import "./PartyList.css";

const PartyList = () => {
  // Dummy party data (will be replaced with real data later)
  const [parties, setParties] = useState([]);

  return (
    <div className="party-page">
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search for your party" className="search-bar" />
        <button className="search-icon">🔍</button>
      </div>

      {/* Party Grid */}
      <div className="party-grid">
        {parties.length > 0 ? (
          parties.map((party, index) => (
            <div className="party-card" key={index}>
              <h3>{party.name}</h3>
              <p>{party.description}</p>
              <p><strong>Address:</strong> {party.address}</p>
              <p><strong>Event:</strong> {party.event}</p>
              <p><strong>Voting Ends:</strong> {party.votingEnd}</p>
              <button className="vote-btn">VOTE</button>
            </div>
          ))
        ) : (
          <p className="no-parties">No parties available. Host a party to see it here!</p>
        )}
      </div>
    </div>
  );
};

export default PartyList;
