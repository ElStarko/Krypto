// utils/otpCache.js
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URI);

const setOTP = (key, value, expiration = 300) => {
    return redis.set(key, value, 'EX', expiration);
};

const getOTP = (key) => {
    return redis.get(key);
};

module.exports = { setOTP, getOTP };
