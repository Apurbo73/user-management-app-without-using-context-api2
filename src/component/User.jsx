import React from "react";

const User = ({ user,handleDeleteUser }) => {
   // handle Delete:
   const handleDelete=(id)=>{
    // alert(id);
    handleDeleteUser(id)
   }
  return (
    <div className="m-4 bg-warning p-3">
      <h5>id: {user.id}</h5>
      <h6>Name: {user.name}</h6>
      <button className="btn btn-danger mt-3" onClick={()=>{handleDelete(user.id)}}>Delete</button>
    </div>
  );
};

export default User;
