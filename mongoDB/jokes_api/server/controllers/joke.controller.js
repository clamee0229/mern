const Joke = require('../models/joke.model')

module.exports.helloWorld = (req, res)=>{
    res.json({msg: 'hello belt reviewer'})
}

module.exports.findAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes => {
            res.json({results: allJokes})
        })
        .catch(err=>res.json({err}))
}

module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(newJoke =>{
            res.json({results: newJoke})
        })
        .catch(err=>res.json({err}))
}

module.exports.findOneJoke = (req, res) =>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke =>{
            res.json({results: oneJoke})
        })
        .catch(err=>res.json({err}))
}

module.exports.updateOneJoke = (req, res)=>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err=>res.json({err}))
}

module.exports.deleteOneJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>res.json({err}))
}

module.exports.findRandomJoke = (req, res) =>{
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
    }

    Joke.find()
        .then(allJokes => {
            // console.log('all ninjas is ', allJokes)
            const randomIndex = getRandomInt(allJokes.length)
            
            res.json({results: allJokes[randomIndex]})
        })
        .catch(err=>res.json({err}))
    

}