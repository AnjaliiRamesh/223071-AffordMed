import { useEffect, useState } from 'react';

function TopUsersPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/numbers/42')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default TopUsersPage;
