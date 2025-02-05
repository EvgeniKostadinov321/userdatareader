import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center p-6">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg mb-4">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
