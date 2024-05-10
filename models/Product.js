const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productTitle: {
        type: String,
        required: true
    },
   review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: false
   }],
    price: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    isNew: {
        type: Boolean
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        required: true
    },
    brand: {
        type: String
    }

});

const Product = model('Product', productSchema);

module.exports = Product;
