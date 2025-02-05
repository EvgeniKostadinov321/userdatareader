import React from 'react';

function UserModal({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
        <p className="mb-2"><strong>Company:</strong> {user.company.name}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserModal;
