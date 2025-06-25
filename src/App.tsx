import Button from './components/Button.jsx';
import Card from './components/Card.jsx';
import React, { useState, useEffect } from 'react';
// TypeScript interfaces for user data
interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message || 'Unknown error');
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          users.map((user) => (
            <Card key={user.id} title={user.name} content={user.email} />
          ))
        )}
      </div>

      <Card title="Counter" content={`The current count is: ${count}`} />
      <Button onClick={() => setCount(count + 1)}>Increment Counter</Button>
    </div>
  );
};

export default App;
