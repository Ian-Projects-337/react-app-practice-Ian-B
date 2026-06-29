import ProfileCard from "./ProfileCard";

function ProfileContainer() {
  return (
    <div className="ProfileContainer">
      <ProfileCard
        name="Name 1"
        age={21}
        bio="Test data 1"
      />
      <ProfileCard
        name="Name 2"
        age={22}
        bio="Test data 2"
      />
      <ProfileCard
        name="Name 3"
        age={23}
        bio="Test data 3"
      />
    </div>
  );
};

export default ProfileContainer;
