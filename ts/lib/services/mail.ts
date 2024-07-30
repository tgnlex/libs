import nodemailer from 'nodemailer';
import {Email} from '../interfaces/email.ts';
import {EMAIL_ADDRESS, EMAIL_PASSWORD} from '../../config/env.ts';
const address = EMAIL_ADDRESS;
const pw = EMAIL_PASSWORD;

class MailService {
  public static transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: address,
        pass: pw
      },
    });
  public static async sendMail(email: Email) {
    const options = {
      from: address,
      to: email.recipient,
      subject: email.subject,
      text: email.content,
    };
    const res = await this.transporter.sendMail(options);
    console.log(res);
    return res;
  };
};
const testEmail: Email = {
  recipient: "alexwebber76@gmail.com",
  subject: "Test",
  content: "Nodemailer test successful."
}
MailService.sendMail(testEmail);

