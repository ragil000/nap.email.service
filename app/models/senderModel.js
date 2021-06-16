'use strict'
const nodemailer = require('nodemailer')

// fungsi untuk mengirim email
exports.sender = async (result) => {
    try {

        // konfigurasi service smtp yang digunakan "process.env" datanya mengambil dari file .env
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        
        // kirim email
        const send = await transporter.sendMail({
            from: `Notification App <noreplay@gmail.com>`, // sender address
            to: result.receiver, // list of receivers
            subject: 'Notification', // Subject line
            text: result.text, // plain text body
        })

        return true
    }catch(err) {
        console.log('error:', err, 'email:', result.receiver)
        return false
    }
}