import { useState } from "react";

const SearchBar = (props) => {
  const { setDeveloperData, userData } = props;
  // this state is used for getting the value of the searched developer.
  const [query, setQuery] = useState("");
  // filtering query from user data.
  const searchedDeveloper = userData.filter((developer) =>
    developer.developerName.toLowerCase().includes(query)
  );
  console.log(query);
  console.log(searchedDeveloper);
  function getSearchedQuery(e) {
    setQuery(() => e.target.value);
    // setDeveloperData(() => searchedDeveloper);
    // console.log(query);
  }
  return (
    <div className="searchBar">
      <input
        onKeyUp={() => setDeveloperData(() => searchedDeveloper)}
        onChange={getSearchedQuery}
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
};
export default SearchBar;

/*
SCENARIO 1
uncomment line no. 15(setDeveloperData(() => searchedDeveloper);) and comment line no. 21( onKeyUp={() => setDeveloperData(() => searchedDeveloper)}). We will see late rendering on our UI.
e.g:
if we search "vicky" in search bar. So we type "vi" in search bar. We will see in console.log that only one object is left but in UI we will see 3 developers card component.

SCENARIO 2
comment line no. 15 and uncomment line no. 21. we will see all working now fine.
In this scenerio, everything is working fine.


SCENARIO 3
comment line no. 11&12 and uncomment line no. 16. Now, when you search any query in search bar, and when you will see in console.log, you will notice that it showing 1 change late.
*/
