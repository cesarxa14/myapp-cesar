const {Schema, model} = require('mongoose');

const RoleSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put your name']
    },
    active: {
        type: Boolean,
        default: true
    },
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Role', RoleSchema);