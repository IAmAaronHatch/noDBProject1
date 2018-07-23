let pokemon = require('./pokemonController')

// let pokemon = [

    // {
    //     id: 0,
    //     name: 'Pikachu',
    //     lvl: 81,
    //     hp: 300,
    //     attack: 100,
    //     sprite: 'http://www.pokestadium.com/sprites/black-white/animated/pikachu.gif'
       
    // },

    //possibly add a moveset (to attack?)
// ]

let id = 1
//Could change this to 7? If I add a battle against "Red"

module.exports = {

    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },

    addPokemon: (req, res) => {
        let {name, lvl, hp, attack, sprite} = req.body
        if(!sprite){
            sprite = 'http://www.pokestadium.com/sprites/black-white/animated/gengar.gif'
        }
        const newPokemon = {
            id,
            lvl,
            name,
            hp,
            attack,
            sprite,
        }

        pokemon.push(newPokemon)
        id++
        res.status(200).send(pokemon)
    },

    updatePokemon: (req, res) => {
        //add sprite
        let {id} = req.params
        let {name, lvl, hp, attack}  = req.body
        let index = pokemon.findIndex(poke => poke.id === +id)
        if(index !== -1) {
            pokemon[index].name = name
            pokemon[index].lvl = lvl
            pokemon[index].hp = hp
            pokemon[index].attack = attack
        }

        res.status(200).send(pokemon)
    },

    deletePokemon: (req, res) => {
        const {id} = req.params
        let index = pokemon.findIndex(poke => poke.id === Number(id))

        if (index !== -1) {
            pokemon.splice (index, 1)
        }

        res.status(200).send(pokemon)
    },


}







