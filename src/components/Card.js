// import React from "react";

function Card({ user }) {
  const fullName = `${user.name.first} ${user.name.last}`;
  const email = user.email;
  const dob = new Date(user.dob.date).toLocaleDateString();

  return (
    <div className="card">
      <img src={user.picture.large} alt={fullName} className="user-img" />
      <div className="user-info">
        <p className="user-name">name: {fullName}</p>
        <p className="user-email">email: {email}</p>
        <p className="user-dob">date of birth: {dob}</p>
      </div>
    </div>
  );
}

export default Card;
