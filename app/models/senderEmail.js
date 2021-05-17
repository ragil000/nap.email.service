'use strict'
const nodemailer = require('nodemailer')

exports.sender = async (result) => {
    const transporter = nodemailer.createTransport({
        service: result.service || 'smtp',
        host: result.host || 'mail.codexv.id',
        port: result.port || 465,
        auth: {
            user: result.sender || 'ragil000@codexv.id',
            pass: result.password || 'ManhajSalaf1'
        }
        // host: 'smtp.ethereal.email',
        // port: 587,
        // auth: {
        //     user: 'grayson.nolan@ethereal.email',
        //     pass: 'PTensjWjWEwBYpB3R3'
        // }
    })

    const send = await transporter.sendMail({
        from: `${result.from} <${result.sender}>`, // sender address
        to: result.receiver, // list of receivers
        subject: result.subject, // Subject line
        text: result.text, // plain text body
        html: result.html, // html body
    })
}