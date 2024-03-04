# Flight Tracker Application

Welcome to the Flight Tracker application, a full-stack project designed to allow users to create, view, edit, and delete flight itineraries. This application uses a Flask API backend with a React frontend, providing a seamless experience for managing flight information and itineraries.

## Features

- **User Authentication**: Secure login and registration functionality for users.
- **Itinerary Management**: Users can create, view, update, and delete flight itineraries.
- **Flight Lookup**: Integration with a flight lookup API (mocked for this project with a seeded JSON file) to add flights to itineraries.
- **Responsive Design**: A clean, user-friendly interface that works on both desktop and mobile devices.

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Database**: SQLite for development, with flexibility to switch to PostgreSQL or other SQL databases.
- **Styling**: CSS with support for SCSS for more complex styling needs.

## Models and Relationships

- **User**: Represents the users of the application. Users can have multiple itineraries.
- **Itinerary**: Represents a collection of flights. Each itinerary belongs to a user.
- **Flight**: Represents a flight. Flights can belong to multiple itineraries through a many-to-many relationship.

## Getting Started

To get the application running locally on your machine, follow these steps:

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm (usually comes with Node.js)

### Setup

1. Clone the repository to your local machine.
2. Navigate to the `backend` directory and install the required Python packages:

```bash
cd backend
pip install -r requirements.txt
```

3. Set up the database:

```bash
flask db upgrade
```

4. Seed the database with initial flight data:

```bash
flask seed
```

5. Start the Flask backend server:

```bash
flask run
```

6. In a new terminal, navigate to the `frontend` directory and install the required npm packages:

```bash
cd ../frontend
npm install
```

7. Start the React development server:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Deployment

This project is set up to be easily deployable on platforms like Render or Heroku. Please refer to the respective platform's documentation for deployment instructions.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements or have identified bugs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
