import { BiUserCircle } from "react-icons/bi";
const Header = () => (
  <div className="header">
    <div className="logo">Storm Troopers</div>
    <div className="searchBar">
      <input type="text" placeholder="What are you looking for?" />
    </div>
    <div className="userIcon">
      <BiUserCircle />

      <a href="#"></a>
    </div>
  </div>
);

export default Header;
