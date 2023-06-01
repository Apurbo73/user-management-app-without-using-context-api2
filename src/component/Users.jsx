import React from "react";
import User from "./User";

const Users = ({ users,handleDeleteUser }) => {
  return (
    <div className="d-flex mx-auto container">
      {users.map(user => <User user={user} key={user.id} handleDeleteUser={handleDeleteUser}/>)}
    </div>
  );
};

export default Users;
