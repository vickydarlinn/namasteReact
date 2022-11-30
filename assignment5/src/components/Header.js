import { BiUserCircle } from "react-icons/bi";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const { setDeveloperData, userData } = props;
  return (
    <div className="header">
      <div className="logo">Storm Troopers</div>
      <SearchBar setDeveloperData={setDeveloperData} userData={userData} />
      <div className="userIcon">
        <BiUserCircle />

        <a href="#"></a>
      </div>
    </div>
  );
};

export default Header;
