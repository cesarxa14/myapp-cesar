const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'cetolara06@gmail.com',
        pass: 'ynttslwovhhlvzgg'
    }

});

// transporter.verify(() => {
//     console.log('Ready for send emails');
// });

module.exports = transporter;