import React from "react";
import { useUser } from "../../context/userContext";

const UserProfile = () => {
  const { userData } = useUser();

  return (
    <div>
      {userData && (
        <>
          <p>Name: {userData.displayName}</p>
          <p>Email: {userData.email}</p>
          <img src={userData.photoURL} alt="Profile" />
        </>
      )}
    </div>
  );
};

export default UserProfile;
