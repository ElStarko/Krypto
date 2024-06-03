const Kryptonian = require('../models/kryptonian');
const { sendEmail } = require('../services/emailService');
const { generateOTP, generateToken } = require('../services/authService');
const OTP_CACHE = require('../utils/otpCache');

const register = async (req, res) => {
    const { email } = req.body;
    try {
        const kryptonian = new Kryptonian({ email });
        await kryptonian.save();
        const otp = generateOTP();
        OTP_CACHE.set(email, otp, 300); // Set OTP in cache for 5 minutes
        await sendEmail(email, 'Confirm your email', `Your OTP is ${otp}`);
        res.status(201).send('Registration successful. Check your email for the OTP.');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const login = async (req, res) => {
    const { email, otp } = req.body;
    const cachedOtp = OTP_CACHE.get(email);
    if (otp === cachedOtp) {
        const token = generateToken({ email });
        res.status(200).json({ token });
    } else {
        res.status(401).send('Invalid OTP');
    }
};

module.exports = { register, login };