# **Panoridim Orchestra Management System**

This project is a web-based application designed to manage the various aspects of a steel pan orchestra. It provides features like user authentication, song management, file uploads for scores and audio files, user progress tracking, and more.

## **Project Structure**
The project is divided into two main parts:
- **Backend**: Complete and fully functional. Built using Node.js, Express, MongoDB (with Mongoose), and GridFS for file handling.
- **Frontend**: Currently a work in progress. Built using React with React Router for navigation and Axios for API communication.

### **Features**

#### **Backend**
- **User Authentication**: Users can register and log in with email and password. JWT is used for authentication.
- **Song Management**: Admins can create, update, and delete songs. Songs are associated with multiple score sections and audio files.
- **File Uploads**: Users can upload MP3 files for audio and PDF files for sheet music using GridFS.
- **User Progress Tracking**: Users can track their progress for learning songs, including time spent and ratings.
- **Protected Routes**: Certain routes are protected and accessible only to logged-in users.

#### **Frontend (Work in Progress)**
- **Login Page**: Users can log in and get authenticated.
- **Dashboard Page**: Displays a list of songs fetched from the backend.
- **File Uploads and Progress Tracking**: Will be added soon.

---

## **Installation**

### **Backend**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the **backend** directory with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The backend server will run at `http://localhost:5000`.

### **Frontend**

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the **frontend** directory with the following variables:
   ```bash
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will run at `http://localhost:3000`.

---

## **Usage**

- **Login Page**: 
  - Navigate to `http://localhost:3000/` to log in.
  - If authenticated, the user is redirected to the dashboard.

- **Dashboard Page**: 
  - Displays a list of songs retrieved from the backend.
  - Users can view songs but additional features like rating and progress tracking are coming soon.

---

## **Technologies Used**

### **Backend**:
- **Node.js** & **Express**: Web framework for handling routes, authentication, and file management.
- **MongoDB & Mongoose**: Database for storing users, songs, and progress data.
- **JWT**: For secure authentication.
- **GridFS**: For handling large file uploads like MP3s and PDFs.

### **Frontend**:
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling client-side routing.
- **Axios**: For making HTTP requests to the backend API.

---

## **Current Status**

- **Backend**: Fully complete and functional.
- **Frontend**: 
  - **Login** and **Dashboard** pages are being prototyped.
  - Work in progress: File uploads, progress tracking, and other features.

---

## **Future Features**

- **Song Ratings**: Users will be able to rate songs.
- **Progress Tracker**: Users can track the progress of learning a song.
- **File Management**: Admins can upload, view, and manage MP3 and PDF files.
- **Chat Feature**: A chat system for users to communicate (future idea).

---

## **Contributing**

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
