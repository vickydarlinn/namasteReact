import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const getFilteredDevelopers = function (query, developersArr) {
  return developersArr.filter(
    (developer) =>
      developer?.name?.toLowerCase().includes(query.toLowerCase()) ||
      developer?.login?.toLowerCase().includes(query.toLowerCase()) ||
      developer?.company?.toLowerCase().includes(query.toLowerCase())
  );
};

const Search = ({ data, setFilteredDeveloperData, setIsSearched }) => {
  const [searchedQuery, setSearchedQuery] = useState("");

  const getDeveloperData = function (e) {
    e.preventDefault();
    setIsSearched(true);
    const filteredData = getFilteredDevelopers(searchedQuery, data);
    setFilteredDeveloperData(filteredData);
  };

  return (
    <form className="searchBar" onSubmit={getDeveloperData}>
      <input
        type="search"
        placeholder="Search for a devleoper here..."
        value={searchedQuery}
        onChange={(e) => setSearchedQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
