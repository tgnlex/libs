const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    jsonTransport: true
});
transporter.sendMail({
    from:
    to:
    subject:
    text:
}, (err, info) => {
    // log message envelope
    console.log(info.envelope);
    // log message ID
    console.log(info.messageId);
    // log JSON string
    console.log(info.message);  
})