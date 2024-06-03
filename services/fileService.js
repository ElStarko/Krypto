// services/fileService.js
const File = require('../models/file');
const base64Img = require('base64-img');
const generateApiKey = require('../utils/generateApiKey');

const generateApiKeyForUser = async (kryptonian) => {
    const apiKey = generateApiKey();
    kryptonian.apiKey = apiKey;
    await kryptonian.save();
    return apiKey;
};

const uploadFile = async (owner, file) => {
    const base64 = base64Img.base64Sync(file.path);
    const newFile = new File({ owner, filename: file.originalname, base64 });
    await newFile.save();
    // Delete file from system
    require('fs').unlinkSync(file.path);
    return newFile;
};

const getAllFiles = async () => {
    return File.find();
};

const getFileById = async (id) => {
    return File.findById(id);
};

module.exports = { generateApiKeyForUser, uploadFile, getAllFiles, getFileById };
