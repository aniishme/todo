# Todo App with CRUD Features

Welcome to the Todo Things! This simple application allows users to manage their tasks by providing a set of features for task management. With the ability to create, read, update, and delete tasks, users can easily stay organized and on top of their responsibilities. The app also allows users to mark tasks as complete and filter tasks based on their status (all, active, completed). A bonus feature is the drag and drop functionality for sorting tasks; please note that this drag and drop feature isn't synchronized with the database and might have some performance issues on mobile Chrome browsers.

## Technologies Used

This app is built using the following technologies:

- **NEXT.js 13**: A powerful framework for building React applications with server-side rendering and other modern features.
- **Prisma**: An ORM (Object-Relational Mapping) tool that simplifies database management and interaction.
- **Redux Toolkit**: A toolkit for managing the state of your application, making it easier to handle complex data flows.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with pre-defined styles.
- **Dnd-kit**: A library for adding drag-and-drop interactions to your app, enhancing user experience.

## How the App Works

The frontend of the app is created using the Next.js app directory, while the backend CRUD (Create, Read, Update, Delete) endpoints are served using the Next.js api directory. These endpoints are integrated with Axios and Redux Thunk, which sync data with the Redux store through the Todoslice. The app's data is stored using a SQLite file-based SQL database, connected to the backend via the Prisma ORM. Once data is fetched from the backend to the frontend, it's stored in the Redux store and utilized by various components for seamless user interactions.

## Steps to Run the Application

Follow these steps to run the Todo App on your local machine:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the command `npm install` to install all the required dependencies.
4. Start the development server with the command `npm run dev`.
5. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access and explore the app.

Feel free to reach out if you have any questions.

Thank You!

Developed By Anish Sharma <3.
