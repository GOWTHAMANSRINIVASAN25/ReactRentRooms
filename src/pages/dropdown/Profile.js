import React from "react";
import { useUser } from "../../context/UserContext";
import "./Profile.css"; 

function Profile() {
  const { user } = useUser();

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Page</h2>
      {user && (
        <>
          
          <p className="profile-username">Username: {user.usersname}</p>
          <p className="profile-email">User Email: {user.usersemail}</p>
          <p className="profile-phone">Userphone number: {user.usersphone}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
