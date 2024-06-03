// models/file.js
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Kryptonian', required: true },
    filename: { type: String, required: true },
    base64: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', FileSchema);
