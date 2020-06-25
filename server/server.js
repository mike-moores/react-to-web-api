const path = require('path')

const cors = require('cors')
const express = require('express')

const widgets = require('./routes/widgets')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/widgets', widgets)

module.exports = server
