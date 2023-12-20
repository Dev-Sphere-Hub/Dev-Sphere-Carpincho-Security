import transporter from '../config/nodemailer.js';

export const sendEmail = async(recipientEmail, subject, htmlContent) => {
    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: recipientEmail,
        subject: subject,
        html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
};