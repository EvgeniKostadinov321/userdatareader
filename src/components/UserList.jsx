import React from 'react';

function UserList({ users, onUserClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map(user => (
        <div
          key={user.id}
          className="p-4 border rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => onUserClick(user)}
        >
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          <p className="text-gray-600 dark:text-gray-400">{user.address.city}, {user.address.street}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
