# Online Quiz Application

Welcome to the **Online Quiz Application**, a full-stack web application designed to provide an interactive platform for users to take quizzes, test their knowledge, and track their progress. Built using **Java Spring Boot** for the backend and **ReactJS** for the frontend, this project showcases my skills in full-stack development and modern web technologies.

A wireframe is attach as reference: [Figma Design File](https://embed.figma.com/design/yyjB2RHUroWJeaVck2kiDY/Online-Quiz-App?node-id=0-1&embed-host=share)

## Features

- **User Authentication**: Secure login and registration for users.
- **Quiz Creation**: Admin functionality to create, edit, and delete quizzes.
- **Interactive Quizzes**: Users can take quizzes with real-time feedback on their answers.
- **Score Tracking**: Users can view their scores and performance history.
- **Responsive Design**: User-friendly interface optimized for both desktop and mobile devices.

## Tech Stack

- **Backend**: Java, Spring Boot
- **Frontend**: ReactJS
- **Database**: MySQL
- **Hosting**: Render

## Getting Started

To get started with the Online Quiz Application, follow the instructions below to set up the project locally.

### Prerequisites

- Java 11 or higher
- Node.js and npm
- MySQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-quiz-app.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd online-quiz-app/backend
   ./mvnw install
   ```
3. Set up your MySQL database and update the configuration files with your database credentials.
4. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
5. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
6. Start the React application:
   ```bash
   npm start
   ```
7. Now you can access the application at `http://localhost:3000`.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
