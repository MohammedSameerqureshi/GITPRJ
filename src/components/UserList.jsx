

import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Replace with your API URL
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setError(error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
