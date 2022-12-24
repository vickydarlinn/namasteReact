import React from "react";
import { FaBuilding } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const DeveloperCard = (props) => {
  const {
    login,
    location,
    name,
    avatar_url: photo,
    company,
    html_url: githuLink,
    twitter_username: twitterLink,
  } = props.developerData;

  return (
    <Link to={`user/${login}`}>
      <div className="developer_card">
        <div className="developer_photo">
          <img src={photo} alt="" />
        </div>
        <div className="developer_info">
          <div className="devleloper_deatils">
            <p className="developer_name">{name ? name : "john doe"}</p>
            <p className="developer_company">
              {<FaBuilding />} {company ? company : "not found"}
            </p>
            <p className="developer_location">
              {<GrLocation />}
              {location ? location : "not found"}
            </p>
          </div>
          <div className="developer_social_links">
            {/* <a href={githuLink}>github</a> */}
            {/* <a href={twitterLink}>twitter</a> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DeveloperCard;
