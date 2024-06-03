const fetch = require('node-fetch');

const sendEmail = async (to, subject, text) => {
    const response = await fetch('https://api.elasticemail.com/v2/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            apikey: process.env.ELASTIC_EMAIL_API_KEY,
            to,
            subject,
            bodyText: text,
            from: 'noreply@kryptoniteapp.com',
        }),
    });
    return response.json();
};

module.exports = { sendEmail };
