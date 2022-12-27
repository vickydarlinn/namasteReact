import React, { useEffect, useState } from "react";

const FollowUp = ({ url, closeModal, header }) => {
  console.log(url, closeModal);
  const [follows, setFollows] = useState([]);
  useEffect(() => {
    getFollows();
  }, []);
  async function getFollows() {
    const resp = await fetch(`${url}`);
    const data = await resp.json();
    setFollows(data);
  }
  const fellows = follows?.map((user) => (
    <div key={user.id} className="fellow">
      <div className="fellow_details">
        <img src={user.avatar_url} alt="" />
        <p className="fellow_username">{user.login}</p>
      </div>
      <a target="_blank" href={`https://github.com/${user.login}/`}>
        follow
      </a>
    </div>
  ));

  return (
    <div className="follows_container">
      <div className="follow_up">
        <div className="follow_up_header">
          <h4>{header}</h4>
          <div onClick={() => closeModal((state) => !state)} className="close">
            X
          </div>
        </div>
        <div className="fellows">{fellows}</div>
      </div>
    </div>
  );
};

export default FollowUp;
