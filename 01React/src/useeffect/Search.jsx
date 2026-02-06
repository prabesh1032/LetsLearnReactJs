import { useState, useEffect } from 'react';

export default function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(10);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return; // Skip if button not clicked

    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
      setShouldFetch(false); // Reset for next search
    }

    fetchUsers();
  }, [count, shouldFetch]);

  return (
    <>
      <h1>GitHub Users</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        min="1"
        max="100"
      />
      <button onClick={() => setShouldFetch(true)}>Search</button>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
}
