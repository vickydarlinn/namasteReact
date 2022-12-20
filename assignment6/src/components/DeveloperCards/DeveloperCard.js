import React from "react";
import { FaGithub, FaBuilding } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const DeveloperCard = (props) => {
  const {
    location,
    name,
    avatar_url: photo,
    company,
    html_url: githuLink,
    twitter_username: twitterLink,
  } = props.developerData;
  return (
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
          <a href={githuLink}>github</a>
          <a href={twitterLink}>twitter</a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
