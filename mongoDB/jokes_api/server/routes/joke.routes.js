const JokeController = require('../controllers/joke.controller')

module.exports = app =>{
    app.get('/', JokeController.helloWorld)
    
    // get all
    app.get('/api/jokes', JokeController.findAllJokes)

    // create one
    app.post('/api/jokes', JokeController.createJoke)

    // random
    app.get('/api/jokes/random', JokeController.findRandomJoke)

    // get one
    app.get('/api/jokes/:id', JokeController.findOneJoke)

    // update one
    app.put('/api/jokes/:id', JokeController.updateOneJoke)

    // delete one
    app.delete('/api/jokes/delete/:id', JokeController.deleteOneJoke)
}