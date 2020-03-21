const nodemailer = require('nodemailer');
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marafonolya2019@gmail.com',
        pass: '1-matafon'
    }
});

