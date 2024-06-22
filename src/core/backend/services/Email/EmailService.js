import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'raunakburrows1999@gmail.com',
                pass: 'uusd nizv rgsn kmyg',
            }
        });
    }

    getHTMLTemplate(templateName) {
        const templatePath = path.join(process.cwd(), 'src', 'core', 'backend', 'services', 'Email', 'HTMLTemplates', templateName);
        return fs.readFileSync(templatePath, 'utf8');
    }

    async sendBookingDetailsEmail(email) {
        const htmlTemplate = this.getHTMLTemplate('EventBookingDetails.html');

        const mailOptions = {
            from: this.transporter.options.auth.user,
            to: email, // Recipient email
            subject: 'Booking Confirmation',
            html: htmlTemplate
        };

        try {
            let info = await this.transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (error) {
            console.error('Error sending email: ' + error);
        }
    }
}

const emailService = new EmailService();

export default emailService;
