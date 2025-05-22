import React, { useState } from "react";

const Profile = ({ name }) => {
  console.log("Profile Randered");
  const [status, setStatus] = useState("Available");
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Status : {status} </p>
      <button onClick={() => setStatus("Away")}>Set Away</button>
      <button onClick={() => setStatus("Available")}>Set Available</button>
    </div>
  );
};

export default Profile;
