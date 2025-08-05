# 🚀 LinkedIn Clone – Backend (API's)

This repository contains the Node.js backend for a LinkedIn clone application. It provides RESTful APIs for user authentication, post management, and profile features.

## 🌐 Live Demo
Frontend: [https://mini-linked-in-assignment.netlify.app/](https://mini-linked-in-assignment.netlify.app/)
Backend: [https://linkedinbackend-a38l.onrender.com/api/posts](https://linkedinbackend-a38l.onrender.com/api/posts)

## 🔧 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv
- **Security**: CORS
- **Frontend**: [Reactjs/vite](https://github.com/sk5198222/linkedInFE)

## Additional features:

- **NewsSideBar**
- **ProfileSidebar**
- **Fully responsive (mobile-screen, tablet screen)**

## 📌 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sk5198222/linkedInBE.git
   cd linkedInBE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/linkedInClone?retryWrites=true&w=majority
   JWT_SECRET=your_strong_secret_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 📂 Project Structure

```
linkedInBE/
├── controllers/    # Route controllers
├── middlewares/    # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── server.js       # Application entry point
└── package.json
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:userId` - Get posts of a particular user

### Users
- After logging in Successfully & securely storing current user in local Storage.

## 🚀 Deployment

The Backend API is deployed in:
- Render
  
## 📧 Contact

For questions or support, please contact:
- Your Name - [sksk5198222@gmail.com](mailto:sksk5198222@gmail.com)
- GitHub: [@sk5198222](https://github.com/sk5198222)
- LinkedIn: [devsathyam](https://www.linkedin.com/in/devsathyam/)
