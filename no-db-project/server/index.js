const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/pokemon', controller.getPokemon)
app.post('/api/pokemon', controller.addPokemon)
app.put('/api/pokemon/:id', controller.updatePokemon)
app.delete('/api/pokemon/:id', controller.deletePokemon)





const port = 4300
app.listen(port, ()=> {
    console.log('I AM LISTENING', port)
})