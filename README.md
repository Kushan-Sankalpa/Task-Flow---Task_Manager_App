

# Task Hut

**Task Hut** is a full-stack web application for managing your tasks in a simple, modern, and visually appealing way. Users can register, log in (using JWT authentication), and perform all CRUD operations on tasks. Tasks are displayed on a dashboard grouped by status (To Do, In Progress, Done) in a clean, box-style layout.  
The backend is built using Spring Boot and MySQL, while the frontend is developed in Angular with Bootstrap and custom CSS for a polished, responsive design.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [JWT Authentication](#jwt-authentication)
- [Database Setup](#database-setup)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features
- **User Registration and Login:** Secure JWT-based authentication.
- **Task Management:** Create, read, update, and delete tasks.
- **Dashboard View:** See tasks grouped by status (To Do, In Progress, Done) in a modern, box-layout design.
- **Responsive Design:** Clean, modern UI using Bootstrap and custom CSS with attractive fonts and gradients.

---

## Tech Stack
- **Backend:**  
  - Spring Boot  
  - Spring Data JPA  
  - Spring Security (JWT)  
- **Frontend:**  
  - Angular  
  - Bootstrap  
  - Custom CSS (with Google Fonts for improved typography, e.g., *Roboto* or *Segoe UI*)  
- **Database:** MySQL  
- **Build Tools:**  
  - Maven (Backend)  
  - Angular CLI (Frontend)

---

## Prerequisites
- **Java:** JDK 11 or later  
- **Maven:** For building the backend  
- **Node.js and npm:** For building and running the Angular frontend  
- **MySQL:** Database server

---

## Installation and Setup


### Backend Setup (Spring Boot)

1. **Clone the Repository:**  
   Open your terminal and run:  
   ```
   git clone https://github.com/Kushan-Sankalpa/Task-Hut---Task_Manager_App.git
   ```
   Then navigate to the backend folder:
   ```
   cd task-hut/Backend/Task_Manager
   ```

2. **Configure the Database:**  
   Update the `src/main/resources/application.properties` file with your MySQL credentials (JDBC URL, username, and password).  
   Example:  
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/task_hut_db?useSSL=false
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password
   ```

3. **Run the Application Using an IDE:**
   - **IntelliJ IDEA:**  
     Open the project in IntelliJ IDEA (if you imported it as a Maven project, IntelliJ will automatically detect it). Locate the main class (usually named `TaskManagerApplication.java`). Click the green run icon next to the main method or right-click the file and select **Run 'TaskManagerApplication'**.
   - **Eclipse:**  
     Import the project as a Maven project. In the **Package Explorer**, locate your main class (e.g., `TaskManagerApplication.java`). Right-click the file, select **Run As > Spring Boot App**.
   - **VS Code:**  
     Install the Java Extension Pack if you haven’t already. Open the project folder in VS Code, then open the main class file (e.g., `TaskManagerApplication.java`) and click the **Run** button above the main method, or press `F5` to launch the application.
  
4. **Run the Application Using the Terminal:**
   You can also run the application from the terminal. Open the terminal in your IDE or use your system terminal and navigate to the project directory, then run:
   ```
   mvn spring-boot:run
   ```
   This command will build and start the Spring Boot application.

After the application starts, the backend server will be available at:  
```
http://localhost:8080
```

---


### Frontend Setup (Angular)
1. **Navigate to the Frontend Directory:**  
   For example, if your path is as follows:
   ```
   cd "D:\Task Manager App\Frontend\Task_Manager_Front-end"
   ```

2. **Install Dependencies:**  
   Run the following command to install all necessary packages:
   ```
   npm install
   ```

3. **Run the Angular Application:**  
   Start the development server with:
   ```
   ng serve
   ```
   The frontend will be available at: `http://localhost:4200`.

---

## JWT Authentication
The application uses JSON Web Tokens (JWT) for secure authentication:
- **Login Process:**  
  When a user logs in, the backend returns a JWT token.
- **Frontend Handling:**  
  The Angular frontend stores this token (typically in local storage) and attaches it to subsequent API requests for protected endpoints.
- **Test Credentials (if needed):**  
  - Username: `testuser`  
  - Password: `testpassword`

---

## Database Setup
The application uses MySQL as its database:
- **Create a Database:**  
  Create a database (e.g., `task_hut_db`) in MySQL or update the name in the `application.properties` file.
- **Schema Management:**  
  Spring Data JPA will automatically create and update the required tables based on your entity classes.

---


## Screenshots

### 1. Login Page  
*Below is a screenshot of the login page. Replace the placeholder with your image file or URL.*  

![Logo](src/assets/login.png)


---

### 2. Register Page  
*Below is a screenshot of the register page. Replace the placeholder with your image file or URL.*  

![Register Page](path/to/register-screenshot.png)

---




## License
*(Add your license details here. For example, MIT License or any other you choose.)*

---

Feel free to modify any details (like repository URLs, database credentials, or additional instructions) as needed for your project. This README provides a comprehensive guide on setting up, running, and understanding your Task Hut application.

---

This version is in plain text (Markdown) format and contains all the essential information to help users set up and run both the backend and frontend of your application.
