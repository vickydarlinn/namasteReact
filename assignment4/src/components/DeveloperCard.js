import { BsLinkedin, BsDiscord } from "react-icons/bs";
const DeveloperCard = () => (
  <div className="developer_card">
    <div className="developer_card_top">
      <div className="developer_details">
        <h3 className="developer_name ">Vicky Sangwan</h3>
        <div className="developer_designation ">Frontend Developer</div>
        <span className="line"></span>
        <div className="developer_address">Delhi, India </div>
        <div className="developer_portfolio">www.vickyDarlinn.com</div>
      </div>
      <div className="developer_photo">
        <img
          src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
    <div className="developer_card_bottom">
      <p className="developer_working_experience">
        Hey, Currently I am working in Paytm and I have 8 years experince.
      </p>
      <div className="developer_social_links">
        <a href="#">
          <BsDiscord />
        </a>
        <a href="#">
          <BsLinkedin />
        </a>
      </div>
    </div>
  </div>
);
export default DeveloperCard;
