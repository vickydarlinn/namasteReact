import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FollowUp from "./FollowUp";

const DeveloperDetails = () => {
  const { github: user } = useParams();
  const [isFollowerClicked, setIsFollowerClicked] = useState(false);
  const [isFollowingClicked, setIsFollowingClicked] = useState(false);

  const [info, setInfo] = useState({});

  //
  useEffect(() => {
    getDevelopers();
  }, []);

  // function of geting data of my bootcamp's developers.
  async function getDevelopers() {
    const developerDataResp = await fetch(
      `https://api.github.com/users/${user}`
    );
    const developerData = await developerDataResp.json();
    setInfo(developerData);
  }

  const {
    avatar_url: image,
    bio,
    blog,
    company,
    followers,
    following,
    location,
    login,
    name,
    twitter_username,
    followers_url,
    following_url,
  } = info;

  const getFollowers = function () {
    setIsFollowerClicked((prev) => !prev);
  };
  const getFollowing = function () {
    setIsFollowingClicked((prev) => !prev);
  };
  return (
    <>
      <div className="member_details">
        <div className="member_image">
          <img src={image} alt="" />
        </div>
        <div className="member_info">
          <div className="member_profile">
            <p className="memeber_username">{login}</p>
            <a target="_blank" href={`https://github.com/${login}`}>
              github
            </a>
            <a target="_blank" href={`https://twitter.com/${twitter_username}`}>
              twitter
            </a>
          </div>
          <div className="member_follows">
            <p onClick={getFollowers} className="follower">
              {followers} followers
            </p>
            <p onClick={getFollowing} className="following">
              {following} following
            </p>
          </div>
          <div>
            <div className="member_more_details">
              <div className="member_name">{name}</div>
              <div className="member_bio">{bio}</div>
            </div>
          </div>
        </div>
      </div>
      {isFollowerClicked ? (
        <FollowUp url={followers_url} closeModal={setIsFollowerClicked} />
      ) : null}
      {isFollowingClicked ? (
        <FollowUp
          url={following_url.slice(0, -13)}
          closeModal={setIsFollowingClicked}
        />
      ) : null}
    </>
  );
};

export default DeveloperDetails;
