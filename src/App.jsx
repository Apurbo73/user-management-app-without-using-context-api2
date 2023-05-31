import { useState } from "react";
import Users from "./component/Users";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Apurbo" },
    { id: 2, name: "Deb Nath" }
  ]);
  return (
    <div className="text-center mt-5">
      <h4 className="text-primary">User Management App..</h4>
      <Users users={users} />
    </div>
  );
}

export default App;
