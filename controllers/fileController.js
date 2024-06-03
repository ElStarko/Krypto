// controllers/fileController.js
const fileService = require('../services/fileService');
const Kryptonian = require('../models/kryptonian');

const upload = async (req, res) => {
    try {
        const apiKey = req.headers['api-key'];
        const kryptonian = await Kryptonian.findOne({ apiKey });
        if (!kryptonian) throw new Error('Invalid API key.');
        const file = await fileService.uploadFile(kryptonian._id, req.file);
        res.status(201).json(file);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllFiles = async (req, res) => {
    try {
        const files = await fileService.getAllFiles();
        res.status(200).json(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getFileById = async (req, res) => {
    try {
        const file = await fileService.getFileById(req.params.id);
        res.status(200).json(file);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { upload, getAllFiles, getFileById };
