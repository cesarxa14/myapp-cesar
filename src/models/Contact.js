const {Schema, model} = require('mongoose');

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put your name']
    },
    phone: {
        type: String,
        required: [true, 'You must put your phone']
    },
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Contact', ContactSchema);