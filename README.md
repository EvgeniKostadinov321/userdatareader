## Features

- **User List**: Displays a list of users with their name, username, email, and address.
- **User Profile View**: Clicking on a user's name opens a modal with additional information about the user, including their phone number and company details.
- **Search Functionality**: Allows users to search the user list by name or username.
- **Dark Mode**: Users can toggle between light and dark modes.
- **Responsive Design**: The application is fully responsive and works well on different devices.
- **Error Handling**: Handles errors when fetching user data from the API.
- **Loading Indicators**: Displays loading indicators while fetching data.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Tailwind CSS**: For styling the application.
- **React Router**: For managing navigation and routing.
- **Fetch API**: For fetching user data from the external API.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/user-data-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd user-data-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## API

The application fetches user data from the following API:
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)

## Project Structure

```
src/
├── components/
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── UserList.jsx
│   ├── UserModal.jsx
├── App.jsx
├── App.css
├── index.css
├── main.jsx
```


