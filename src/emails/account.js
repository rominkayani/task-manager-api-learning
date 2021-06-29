const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rominkayani123@gmail.com',
        subject: 'Greetings',
        text: `Welcome to my app, ${name}. If you have any questions or concerns do feel free to send me an email!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rominkayani123@gmail.com',
        subject: 'Sad to See You Go',
        text: `I am so sorry to see you leave out platform, ${name}. If there is anything I could have done better, please do let me know!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}