import React from "react";
import { teamName } from "../utils/Constant";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">{teamName}</Link>
    </header>
  );
  // USE CONSTANTS
}

export default Header;
