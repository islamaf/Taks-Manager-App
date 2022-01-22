const mailgun = require("mailgun-js");
const api_key = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    };

    mg.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }

        console.log(body);
    });
}

const sendDeletionEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'We are sad to see you go!',
        text: `Hello, ${name}. Let me know what caused you to leave.`
    };

    mg.messages().send(data, function (error, body) {
        if (error) {
            console.log(error)
        }

        console.log(body);
    });
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}