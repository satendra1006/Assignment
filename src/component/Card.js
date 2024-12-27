import React from "react";
import "./Card.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="card-container">
      {/* Left Side: Image */}
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="card-image"
      />

      {/* Right Side: Content */}
      <div className="card-content">
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>Gender: {user.gender}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
