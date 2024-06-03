const express = require('express');
const multer = require('multer');
const fileController = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temporary folder for uploads

router.post('/upload', upload.single('image'), fileController.uploadImage);
router.get('/images', fileController.getAllImages);
router.get('/images/:id', fileController.getImageById);

module.exports = router;
