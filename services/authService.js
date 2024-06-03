const crypto = require('crypto');
const { promisify } = require('util');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => await bcrypt.compare(password, hash);

const generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

module.exports = {
    generateOTP,
    hashPassword,
    comparePassword,
    generateToken,
};
