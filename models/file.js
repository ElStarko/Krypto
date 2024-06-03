const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Kryptonian', required: true },
    base64: { type: String, required: true },
    fileType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);
