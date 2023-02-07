const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    code: {
        type: String,
        required: [true, 'You must put the code'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'You must put the name'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, 'You must put the price'],
    },
    urlImage: {
        type: String,
    },
    _category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', ProductSchema);