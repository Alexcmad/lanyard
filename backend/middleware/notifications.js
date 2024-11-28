const nodemailer = require('nodemailer');

const sendNotificationEmail = async (user, event) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: `New Event: ${event.title}`,
        text: `Hello ${user.name},\n\nYou have a new event: ${event.title}. Check it out!\n\nDetails:\n${event.description}\nDate: ${event.date}`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending notification email:", error);
    }
};
