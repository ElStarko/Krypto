const uuid = require('uuid');

const generateApiKey = () => uuid.v4();

module.exports = { generateApiKey };
