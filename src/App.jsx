import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserModal from './components/UserModal';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">User Profiles</h1>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => setDarkMode(!darkMode)}
              >
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
            <nav className="mb-4 flex justify-center space-x-4">
              <Link to="/" className="text-lg font-semibold text-blue-500 nav-link">Home</Link>
              <Link to="/users" className="text-lg font-semibold text-blue-500 nav-link">Users</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={
                <>
                  <input
                    type="text"
                    placeholder="Search by name or username"
                    className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <div className="loader"></div>
                    </div>
                  ) : error ? (
                    <div className="text-red-500">{error}</div>
                  ) : (
                    <UserList users={filteredUsers} onUserClick={handleUserClick} />
                  )}
                  {selectedUser && (
                    <UserModal user={selectedUser} onClose={handleCloseModal} />
                  )}
                </>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
