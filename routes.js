// routes.js
const express = require('express');
const multer = require('multer');
const authController = require('./controllers/authController');
const fileController = require('./controllers/fileController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/register', authController.register);
router.get('/confirm/:id', authController.confirmEmail);
router.post('/login', authController.login);
router.post('/verify-otp', authController.verifyOTP);

router.post('/upload', upload.single('file'), fileController.upload);
router.get('/files', fileController.getAllFiles);
router.get('/files/:id', fileController.getFileById);

module.exports = router;
