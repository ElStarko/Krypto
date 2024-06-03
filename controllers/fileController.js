const { saveFile } = require('../services/fileService');
const Kryptonian = require('../models/kryptonian');
const File = require('../models/file');

const uploadFile = async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const kryptonian = await Kryptonian.findOne({ apiKey });
    if (!kryptonian) {
        return res.status(403).send('Invalid API key');
    }
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }
    try {
        const file = await saveFile(req.file.path, kryptonian._id);
        res.status(201).json(file);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getFile = async (req, res) => {
    const fileId = req.params.id;
    try {
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).send('File not found');
        }
        res.status(200).json(file);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllFiles = async (req, res) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { uploadFile, getFile, getAllFiles };
