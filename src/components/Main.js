import React, { useState, useEffect } from "react";
import Card from "./Card";

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="list-wrap">
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
}

export default Main;
