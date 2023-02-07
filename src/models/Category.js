const {Schema, model} = require('mongoose');

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put the name']
    },
    active: {
        type: Boolean,
        default: true
    },
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Category', CategorySchema);