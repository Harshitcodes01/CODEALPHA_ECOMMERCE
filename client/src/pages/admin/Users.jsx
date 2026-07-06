import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser,
} from "../../services/userService";

import "./Users.css";
import "../../styles/AdminTable.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await deleteUser(id);

    loadUsers();
  };

  return (
    <div className="users-page">

      <h1>User Management</h1>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.role}</td>

              <td>

                <button
                  onClick={() =>
                    handleDelete(user.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Users;