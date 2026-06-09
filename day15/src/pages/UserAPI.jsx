import React, { useEffect, useState } from "react";

const UserAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function userLists() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        let data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    userLists();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <main className="MainSection">
      <h1 className="heading">User Lists</h1>
      <table border={1} cellSpacing={10}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </main>
  );
};

export default UserAPI;
