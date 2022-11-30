import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import userData from "./teamMatesData";

const App = () => {
  // this state is used for updating team members data.
  const [developerData, setDeveloperData] = useState(userData);

  return (
    <div className="App">
      <Header setDeveloperData={setDeveloperData} userData={userData} />
      <Body userData={developerData} />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
