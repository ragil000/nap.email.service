const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const Checker = require('./app/controllers/checkerController')

// konfigurasi database mongodb
const mongodbUri = process.env.MONGODB_URL 
mongoose.connect(`mongodb:${mongodbUri}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = global.Promise

// untuk mengecek log
app.use(morgan('dev'))

// memanggil fungsi checker
Checker.checker()

module.exports = app