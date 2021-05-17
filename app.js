const express = require('express')
const app = express()
const morgan = require('morgan')
const consumer = require('./app/controllers/consumerRabbitMQ')
const test = require('./app/controllers/test')

app.use(morgan('dev'))

consumer.consumer()

test.send()

// handle error
app.use((request, response, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({
        error: {
            message: error.message || 'Server error'
        }
    })
})

module.exports = app