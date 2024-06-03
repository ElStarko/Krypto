const base64Img = require('base64-img');
const File = require('../models/file');

const saveFile = async (filePath, owner) => {
    const base64String = base64Img.base64Sync(filePath);
    const file = new File({
        owner,
        base64: base64String,
        fileType: filePath.split('.').pop(),
    });
    await file.save();
    base64Img.imgSync(base64String, 'uploads', `${file._id}`);
    return file;
};

module.exports = { saveFile };
