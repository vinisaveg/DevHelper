const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const port = 3003

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})