import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.svg";
import user from "./images/user.png";
//without JSX
// const Heading = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "hello vicky heading 1"),
//   React.createElement("h2", null, "hello vicky heading 2"),
//   React.createElement("h3", null, "hello vicky heading 3")
// );

//with JSX
// const Heading = () => (
//   <div>
//     <h1>hello vicky heading 1 using JSX</h1>
//     <h2>hello vicky heading 2 using JSX</h2>
//     <h3>hello vicky heading 3 using JSX</h3>
//   </div>
// );

// without jsx
// const Header = React.createElement(
//   "div",
//   {
//     className: "header",
//   },
//   React.createElement(
//     "div",
//     {
//       className: "logo",
//     },
//     React.createElement("img", {
//       src: logo,
//       alt: "",
//     })
//   ),
//   React.createElement(
//     "div",
//     {
//       className: "searchBar",
//     },
//     React.createElement("input", {
//       type: "text",
//       placeholder: "What are you looking for?",
//     })
//   ),
//   React.createElement(
//     "div",
//     {
//       className: "userIcon",
//     },
//     React.createElement("img", {
//       src: user,
//       alt: "",
//     })
//   )
// );
// with JSX
const Logo = () => (
  <div className="logo">
    <img src={logo} alt="" />
  </div>
);
const SearchBar = () => (
  <div className="searchBar">
    <input type="text" placeholder="What are you looking for?" />
  </div>
);
const UserIcon = () => (
  <div className="userIcon">
    <img src={user} alt="" />
  </div>
);

const Header = () => (
  <div className="header">
    <Logo />
    <SearchBar />
    <UserIcon />
  </div>
);
// rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
