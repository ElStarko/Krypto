// controllers/authController.js
const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        await authService.register(req.body.email, req.body.password);
        res.status(201).send('Registration successful. Check your email for confirmation link.');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const confirmEmail = async (req, res) => {
    try {
        await authService.confirmEmail(req.params.id);
        res.status(200).send('Email confirmed successfully.');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        await authService.login(req.body.email, req.body.password);
        res.status(200).send('OTP sent to your email.');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const verifyOTP = async (req, res) => {
    try {
        const token = await authService.verifyOTP(req.body.email, req.body.otp);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { register, confirmEmail, login, verifyOTP };
