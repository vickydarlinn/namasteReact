import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import DeveloperCardsContainer from "./components/DeveloperCards/DeveloperCardsContainer";
import Footer from "./components/Footer";
import data from "./utils/data/data.json";

const App = () => {
  const [allDevelopersData, setAllDevelopersData] = useState([]);

  useEffect(() => {
    getDevelopers();
  }, []);

  // function of geting data of my bootcamp's developers.
  async function getDevelopers() {
    const developerArr = [];
    for (developer of data) {
      const developerDataResp = await fetch(
        `https://api.github.com/users/${developer.github_login}`
      );
      const developerData = await developerDataResp.json();
      developerArr.push(developerData);
    }
    // console.log(developerArr);
    setAllDevelopersData(developerArr);
  }

  return (
    <div className="app">
      <Header />
      <Search />
      <DeveloperCardsContainer allDevelopersData={allDevelopersData} />
      <Footer />
    </div>
  );
};

export default App;
