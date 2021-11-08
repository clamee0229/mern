const { DESTRUCTION } = require('dns')
const mongoose = require('mongoose')
const { stringify } = require('querystring')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true, 'A Joke requires a set up!']
    },
    punchLine: {
        type: String,
        required: [true, 'A Joke requires a punchline!']
    }
    
},{timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke