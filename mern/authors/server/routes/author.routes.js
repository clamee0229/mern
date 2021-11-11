const AuthorController = require('../controllers/author.controller')



module.exports = app =>{
    app.get('/', AuthorController.helloWorld)

    app.get('/api/author', AuthorController.findAllAuthors)

    app.post('/api/author', AuthorController.createAuthor)

    app.get('/api/author/:id', AuthorController.findOneAuthor)

    app.put('/api/author/:id', AuthorController.updateAuthor)

    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
}