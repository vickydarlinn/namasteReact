import { BsLinkedin, BsDiscord } from "react-icons/bs";
const DeveloperCard = (props) => {
  console.log(props);
  const {
    name,
    image,
    location,
    discord,
    company,
    portfolio,
    linkedin,
    experience,
  } = props;
  return (
    <div className="developer_card">
      <div className="developer_card_top">
        <div className="developer_details">
          <h3 className="developer_name ">{name}</h3>
          <div className="developer_designation ">Frontend Developer</div>
          <span className="line"></span>
          <div className="developer_address">{location} </div>
          <div className="developer_portfolio">{portfolio}</div>
        </div>
        <div className="developer_photo">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="developer_card_bottom">
        <p className="developer_working_experience">
          Hey, Currently I am working in {company} and I have {experience} years
          experince.
        </p>
        <div className="developer_social_links">
          <a href={discord}>
            <BsDiscord />
          </a>
          <a href={linkedin}>
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
export default DeveloperCard;
