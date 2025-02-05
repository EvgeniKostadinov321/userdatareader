import React from 'react';

function Home() {
  return (
    <div className="text-center p-6">
      <h2 className="text-4xl font-bold mb-4">Welcome to User Profiles</h2>
      <p className="text-lg mb-4">
        This website provides information about different users, including their contact details and the companies they work for. You can search for users by name or username and view detailed information about each user.
      </p>
      <p className="text-lg mb-4">
        Our goal is to help you find the right contacts and business information quickly and easily.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Search Users</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Use our search functionality to find users by their name or username.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-2">View Profiles</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Click on a user's name to view detailed information about them, including their contact details and company information.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-2">Business Information</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get insights into the companies users work for, including their websites and contact information.
          </p>
        </div>
      </div>
      <p className="text-lg mt-8">
        Click on the "Users" link in the navigation bar to get started.
      </p>
    </div>
  );
}

export default Home;
