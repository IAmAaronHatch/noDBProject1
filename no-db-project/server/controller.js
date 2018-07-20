
let pokemon = [

    {
        id: 0,
        name: 'Pikachu',
        lvl: 81,
        hp: 300,
        attack: 100,
        sprite: true,
    },

    //possibly add a moveset (to attack?)
]

let id = 1
//Could change this to 7? If I add a battle against "Red"

module.exports = {

    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },

    addPokemon: (req, res) => {
        const {name, lvl, hp, attack, sprite} = req.body

        const newPokemon = {
            id,
            name,
            hp,
            attack,
            sprite
        }

        pokemon.push(newPokemon)
        id++
        res.status(200).send(pokemon)
    },

    updatePokemon: (req, res) => {
        //
    },

    deletePokemon: (req, res) => {
        let {id} = req.params
        let index = pokemon.findIndex(poke => poke.id === Number(id))

        if (index !== -1) {
            pokemon.splice (index, 1)
        }

        res.status(200).send(pokemon)
    },


}







