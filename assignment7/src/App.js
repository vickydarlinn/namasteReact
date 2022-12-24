import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PageNotFound from "./components/DeveloperCards/PageNotFound";
import DeveloperCardsContainer from "./components/DeveloperCards/DeveloperCardsContainer";
import Footer from "./components/Footer";
import data from "./utils/data/data.json";
import { Route, Routes } from "react-router-dom";
import DeveloperDetails from "./components/DeveloperCards/DeveloperDetails";
import FollowUp from "./components/DeveloperCards/FollowUp";

const App = () => {
  const [allDevelopersData, setAllDevelopersData] = useState([]);
  const [filteredDeveloperData, setFilteredDeveloperData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  //
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
    setAllDevelopersData(developerArr);
  }
  const HomePage = function () {
    return (
      <>
        <Search
          data={allDevelopersData}
          setFilteredDeveloperData={setFilteredDeveloperData}
          setIsSearched={setIsSearched}
        />

        {isSearched ? (
          filteredDeveloperData.length ? (
            <DeveloperCardsContainer developersData={filteredDeveloperData} />
          ) : (
            <PageNotFound />
          )
        ) : (
          <DeveloperCardsContainer developersData={allDevelopersData} />
        )}
      </>
    );
  };

  return (
    <div className="app">
      <Header />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user/:github" element={<DeveloperDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
