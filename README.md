# Users CRUD App (Express.js, Handlebars, UUID)

This project is a simple Users CRUD (Create, Read, Update, Delete) application built using the Express.js framework, the Handlebars templating engine, and the UUID (Universally Unique Identifier) library. The data is stored in a `users.json` file.

## Technologies

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Handlebars](https://handlebars.js.com/)
* [UUID](https://www.npmjs.com/package/uuid)
* [`body-parser`](https://www.npmjs.com/package/body-parser)
* [`method-override`](https://www.npmjs.com/package/method-override)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your_github_repository_link>
    cd users-crud-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the server (development mode):**

    ```bash
    npm run dev
    ```

    or to start normally:

    ```bash
    npm start
    ```

    The application will be running at `http://localhost:3000`.

## Features

* **View All Users:** Displays all users as "user cards" in the browser (`/users`).
* **View User Details:** View detailed information for a selected user (`/users/:id`).
* **Create New User:** Form to create a new user (`/users/create`).
* **Edit User:** Form to edit the information of an existing user (`/users/:id/edit`).
* **Delete User:** Option to delete an existing user (`/users/:id/delete`).

## Project Structure

```
users-crud-app/
├── users.json            # Database (JSON file)
├── src/
│   ├── app.js            # Main Express.js application
│   ├── config/
│   │   └── handlebars.js # Handlebars configuration
│   ├── controllers/
│   │   └── users.controller.js # Logic for handling user requests
│   ├── models/
│   │   └── user.model.js     # User data model
│   ├── routes/
│   │   └── users.routes.js   # User routes
│   ├── utils/
│   │   └── fileUtils.js    # Utility functions for file operations
│   └── views/
│       ├── layouts/
│       │   └── main.handlebars # Main layout
│       ├── partials/
│       │   └── userCard.handlebars # Partial for displaying a user card
│       ├── users/
│       │   ├── index.handlebars   # View for displaying all users
│       │   ├── view.handlebars    # View for displaying a single user
│       │   ├── create.handlebars  # Form for creating a new user
│       │   ├── edit.handlebars    # Form for editing a user
│       └── home.handlebars       # Optional homepage
├── public/
│   ├── css/
│   │   └── style.css       # CSS styles
│   ├── js/
│   │   └── script.js      # Optional JavaScript code
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Specific versions of dependencies
└── README.md             # Project information (this file)
```


## Usage

Open your browser and navigate to `http://localhost:3000/users`. You will see a list of users. Each user card has "View", "Edit", and "Delete" buttons. There is also a "Create New User" button at the top.

* **View:** Click the "View" button on a user card to see detailed information about that user.
* **Edit:** Click the "Edit" button on a user card to modify the user's information.
* **Delete:** Click the "Delete" button on a user card to remove the user (confirmation will be asked).
* **Create New User:** Click the "Create New User" button to add a new user.

## Additional Notes

* The application stores data in the `users.json` file.
* Each user is assigned a unique ID (UUID).
* The `method-override` middleware is used to enable PUT and DELETE requests from HTML forms.
* The `public` directory contains static files (CSS, JavaScript).

## Author
\[Tillayev Xusniddin]
