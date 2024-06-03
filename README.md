# Krypto

# Krypto

Krypto is a Node.js backend application for handling authentication, file uploads, and access control for Kryptonians on the planet Krypton. It includes features such as user registration, email confirmation, two-factor authentication (2FA), file uploads, and access control for Supergirl (Kara Zor-El).

## Features

- **Authentication**:
  - User registration with email confirmation.
  - Two-factor authentication (2FA) using OTP sent via email.
- **File Uploads**:
  - Ability to upload image files with API key authentication.
  - Images are stored as Base64 strings in the database.
- **Access Control**:
  - Supergirl (Kara Zor-El) can access all images without authentication.
- **API Key Management**:
  - Users can generate API keys for authentication.
  - API keys can be invalidated to prevent unauthorized access.

## Getting Started

To get started with KryptoniteApp, follow these steps:

1. Clone the repository:

   ```
   git clone (https://github.com/ElStarko/Krypto.git)
   cd Krypto
   ```

###Install dependencies:

npm install

###Set up environment variables:

Create a .env file in the root directory and add the following variables:

  PORT=3000
  MONGODB_URI=your-mongodb-uri
  JWT_SECRET=your-jwt-secret
  EMAIL_SERVICE=elasticemail
  EMAIL_USER=your-email@example.com
  EMAIL_PASS=your-email-password
  REDIS_URI=redis://localhost:6379

###Run the application:

npm start

Directory Structure
The project structure is organized as follows:

Krypto/
├── controllers/
│   ├── authController.js
│   ├── fileController.js
├── models/
│   ├── kryptonian.js
│   ├── file.js
├── services/
│   ├── authService.js
│   ├── fileService.js
├── utils/
│   ├── email.js
│   ├── generateApiKey.js
│   ├── otpCache.js
├── .env
├── app.js
├── routes.js
└── README.md


# KryptoniteApp API Documentation

## Base URL

## Authentication

### Register a New User

- **URL:** `/api/register`
- **Method:** `POST`
- **Description:** Register a new user with email and password.

### Confirm Email

- **URL:** `/api/confirm/:id`
- **Method:** `GET`
- **Description:** Confirm user's email address using confirmation link.

### Login

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Log in a user with email and password, and send OTP via email.

### Verify OTP

- **URL:** `/api/verify-otp`
- **Method:** `POST`
- **Description:** Verify OTP received via email and generate authentication token.

## File Uploads

### Upload Image

- **URL:** `/api/upload`
- **Method:** `POST`
- **Description:** Upload an image file with API key authentication.

## Access Control

### Get All Files

- **URL:** `/api/files`
- **Method:** `GET`
- **Description:** Get a list of all uploaded files.

### Get File by ID

- **URL:** `/api/files/:id`
- **Method:** `GET`
- **Description:** Get details of a specific file by ID.

## API Key Management

### Generate API Key

- **URL:** `/api/generate-api-key`
- **Method:** `POST`
- **Description:** Generate an API key for authentication.

### Invalidate API Key

- **URL:** `/api/invalidate-api-key`
- **Method:** `POST`
- **Description:** Invalidate an existing API key to prevent further use.

 ###Contributing

Contributions are welcome! If you'd like to contribute to KryptoniteApp, please fork the repository and submit a pull request.

###License
This project is licensed under the MIT License - see the LICENSE file for details.

This README.md file provides an overview of the project, instructions for getting started, information about API documentation, the directory structure, contributing guidelines, and license details. Feel free to customize it further to suit your project's specific requirements and preferences.

