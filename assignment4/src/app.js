import React from "react";
import ReactDOM from "react-dom/client";
// components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const TestComponent = () => {
  console.log(1 + 2);
  return (
    <div>
      <h1>this is h1</h1>
      <h2>this is h2</h2>
    </div>
  );
};
const App = () => {
  console.log("hi");
  console.log(TestComponent);
  console.log(TestComponent());
  console.log(<TestComponent vicky="hi" />);
  return (
    <div className="App">
      <Body />
      {Body()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
