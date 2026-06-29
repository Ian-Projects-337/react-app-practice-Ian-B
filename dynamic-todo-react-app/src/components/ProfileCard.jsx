const ProfileCard = ({ name, age, bio }) => {
  return (
    <ol className="ProfileCard">
      <li>{name}</li>
      <li>{age}</li>
      <li>{bio}</li >
    </ol>
  );

};

export default ProfileCard;
