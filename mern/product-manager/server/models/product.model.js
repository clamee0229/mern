const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [2, 'Name must be at least 2 characters long']
    },
    price: {
        type: String,
        required: [true, 'Cost of product is required']
    },
    description: {
        type: String,
        required: [true, 'Description of product is required']
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product