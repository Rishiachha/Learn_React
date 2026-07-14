// useEffect() Runs after rendering.

// [] means: Run only once.
// it is Used for API calls,Timers, Event listeners
import { useState, useEffect } from "react";
export const Effect = () => {
  const [users, setUsers] = useState([]);
  // Runs after the component renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {
        users.map((user) => (
          <p key={user.id}>
            {user.name}
          </p>
        ))
      }
    </div>
  );
}