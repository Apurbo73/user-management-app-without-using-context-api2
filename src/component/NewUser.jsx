import React, { useState } from "react";

const NewUser = ({ handleAddUser }) => {
  const [userName, setUserName] = useState("");
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), userName: userName };
    // alert(newUser.id);
    handleAddUser(newUser);
    setUserName("");
  };
  return (
    <div className="w-25 mx-auto container">
      <h1 className="text-danger">Add New User...</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex m-3">
          <div className="m-1   ">
            <input
              type="text"
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              value={userName}
              onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary  m-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
