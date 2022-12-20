import React from "react";
import DeveloperCard from "./DeveloperCard";

const DeveloperCardsContainer = ({ allDevelopersData }) => {
  console.log(allDevelopersData);
  return (
    <div className="developer_cards_container">
      {allDevelopersData.map((developer) => (
        <DeveloperCard developerData={developer} />
      ))}
    </div>
  );
};

export default DeveloperCardsContainer;
