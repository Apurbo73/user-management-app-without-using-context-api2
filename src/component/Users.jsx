import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <div className="d-flex mx-auto container">
      {users.map(user => <User user={user} key={user.id} />)}
    </div>
  );
};

export default Users;
