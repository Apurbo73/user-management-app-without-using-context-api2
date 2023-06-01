import { useState } from "react";
import Users from "./component/Users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewUser from "./component/NewUser";
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Apurbo" },
    { id: 2, name: "Deb Nath" }
  ]);
  const handleDeleteUser = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    toast(`id ${id} is deleted`);
    setUsers(filteredUsers);
  };
  const handleAddUser = newUser => {
    const { name } = newUser;
    // toast("ok");
    setUsers(previousUsers => [...previousUsers, newUser]);
  };
  return (
    <div className="text-center mt-5">
      <ToastContainer />
      <h4 className="text-primary">User Management App..</h4>
      <NewUser handleAddUser={handleAddUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;
