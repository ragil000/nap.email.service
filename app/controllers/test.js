const amqp = require('amqplib')

exports.send = async () => {
    let data = {
        service: 'smtp',
        host: 'mail.codexv.id',
        port: 465,
        sender: 'ragil000@codexv.id',
        password: '08Juni1997',
        from: 'Bee2BeeHub (do not replay)',
        receiver: 'ragilmanggalaning42@gmail.com',
        subject: 'Verify account',
        text: 'verify',
        html: '<h1>Hallo gaess!</h1>'
    }

    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URI)
        const channel = await connection.createChannel()
        await channel.assertQueue(process.env.QUEUE)
        channel.sendToQueue(process.env.QUEUE, Buffer.from(JSON.stringify(data)))
    }catch(error) {
        console.log('failed send to rabbitMQ', error)
    }
}