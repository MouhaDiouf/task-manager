const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDER_EMAIL,
    subject: "Welcome to the app!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDER_EMAIL,
    subject: `It's sad to see you go ${name}`,
    text: `Hi ${name}. Your account was removed successfully! Let us know if there is anything we could have done better to keep you onboard.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
