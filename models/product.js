const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true 
    },

    name: {
        type: String, 
        required: true, 
        unique: true 
    },
    
    description: { 
        type: String, 
        required: true, 
        unique: true 
    },
    
    photo: { 
        //foto dosya dizini için string tuttum
        type: String, 
    },

    price: { 
        type: Number, 
        required: true, 
    },

  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
