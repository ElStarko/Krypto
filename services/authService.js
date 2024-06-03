// services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Kryptonian = require('../models/kryptonian');
const { setOTP, getOTP } = require('../utils/otpCache');
const sendEmail = require('../utils/email');
const generateApiKey = require('../utils/generateApiKey');

const register = async (email, password) => {
    const kryptonian = new Kryptonian({ email, password });
    await kryptonian.save();
    const confirmationLink = `http://yourdomain.com/confirm/${kryptonian._id}`;
    await sendEmail(email, 'Confirm your account', `Click here to confirm: ${confirmationLink}`);
};

const confirmEmail = async (id) => {
    const kryptonian = await Kryptonian.findById(id);
    if (!kryptonian) throw new Error('Invalid confirmation link.');
    kryptonian.confirmed = true;
    await kryptonian.save();
};

const login = async (email, password) => {
    const kryptonian = await Kryptonian.findOne({ email });
    if (!kryptonian || !kryptonian.confirmed || !await bcrypt.compare(password, kryptonian.password)) {
        throw new Error('Invalid credentials.');
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await setOTP(email, otp);
    await sendEmail(email, 'Your OTP', `Your OTP is ${otp}`);
};

const verifyOTP = async (email, otp) => {
    const storedOTP = await getOTP(email);
    if (otp !== storedOTP) throw new Error('Invalid OTP.');
    const kryptonian = await Kryptonian.findOne({ email });
    const token = jwt.sign({ id: kryptonian._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = { register, confirmEmail, login, verifyOTP };
