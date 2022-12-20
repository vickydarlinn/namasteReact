import React from "react";
import DeveloperCard from "./DeveloperCard";

const DeveloperCardsContainer = ({ developersData }) => {
  return (
    <div className="developer_cards_container">
      {developersData.map((developer) => (
        <DeveloperCard key={developer.id} developerData={developer} />
      ))}
    </div>
  );
};

export default DeveloperCardsContainer;
