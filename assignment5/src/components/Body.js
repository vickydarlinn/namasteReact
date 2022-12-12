import DeveloperCard from "./DeveloperCard";

function Body(props) {
  const { userData } = props;
  return (
    <div className="developers">
      {userData.map((developer) => (
        <DeveloperCard
          key={developer.id}
          name={developer.developerName}
          image={developer.developerImage}
          location={developer.location}
          portfolio={developer.portfolio}
          discord={developer.discordUserId}
          linkedin={developer.linkedinProfile}
          company={developer.currentCompany}
          experience={developer.Experience}
        />
      ))}
    </div>
  );
}
export default Body;
