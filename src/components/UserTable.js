import React, { useEffect, useState } from "react";
import "./UserTable.css";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <img src={user.image} alt="Profile Pic" />
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserTable;
