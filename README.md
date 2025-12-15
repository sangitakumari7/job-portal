# MERN Stack Job Portal

This is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This platform serves as a professional networking and job portal, allowing users to create profiles, connect with others, and share posts.

## Features

-   **User Authentication:** Secure user registration and login system.
-   **User Profiles:** Create and manage user profiles with profile pictures.
-   **Post Feed:** Users can create, view, and interact with posts from their network.
-   **Networking:** Connect with other users to build a professional network.
-   **Notifications:** Receive notifications for connection requests and other activities.

## Tech Stack

-   **Frontend:** React, Vite, Tailwind CSS
--   **Backend:** Node.js, Express.js
-   **Database:** MongoDB
-   **Authentication:** JSON Web Tokens (JWT)
-   **File Storage:** Cloudinary for image uploads.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js and npm installed
-   MongoDB instance (local or cloud)
-   Cloudinary account for image storage

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/job-portal.git
    cd job-portal
    ```

2.  **Backend Setup:**
    -   Navigate to the `Backend` directory:
        ```sh
        cd Backend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `Backend` directory and add the following variables:
        ```env
        PORT=8000
        MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
        JWT_SECRET=<YOUR_JWT_SECRET>
        CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
        CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
        CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
        ```
    -   Start the backend server:
        ```sh
        npm start
        ```

3.  **Frontend Setup:**
    -   Navigate to the `Frontend` directory:
        ```sh
        cd ../Frontend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `Frontend` directory and add the backend API URL:
        ```env
        VITE_API_URL=http://localhost:8000
        ```
    -   Start the frontend development server:
        ```sh
        npm run dev
        ```

The application should now be running, with the frontend available at `http://localhost:5173` (or another port specified by Vite) and the backend at `http://localhost:8000`.

## Folder Structure

```
job-portal/
├── Backend/
│   ├── config/       # Database, Cloudinary configuration
│   ├── controllers/  # Request handling logic
│   ├── middlewares/  # Express middlewares (e.g., auth)
│   ├── models/       # Mongoose schemas and models
│   ├── routes/       # API routes
│   └── index.js      # Server entry point
└── Frontend/
    ├── src/
    │   ├── assets/       # Static assets
    │   ├── components/   # Reusable React components
    │   ├── context/      # React context for state management
    │   ├── pages/        # Main page components
    │   └── App.jsx       # Main application component
    └── vite.config.js  # Vite configuration
```
