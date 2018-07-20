const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 4300
app.listen(port, ()=> {
    console.log('I AM LISTENING', port)
})