const ProductController = require('../controllers/product.controller')



module.exports = app =>{
    app.get('/', ProductController.helloWorld)

    app.get('/api/product', ProductController.findAllProducts)

    app.post('/api/product', ProductController.createProduct)

    app.get('/api/product/:id', ProductController.findOneProduct)

    app.put('/api/product/:id', ProductController.updateProduct)

    app.delete('/api/product/delete/:id', ProductController.deleteProduct)
}