const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    streamTransport: true,
    newline: 'windows'
});
transporter.sendMail({
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Message',
    text: 'I hope this message gets streamed!'
}, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
    info.message.pipe(process.stdout);
});