const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put the name']
    },
    lastname: {
        type: String,
        required: [true, 'You must put the lastname']
    },
    username: {
        type: String,
        required: [true, 'You must put the username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'You must put the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'You must put the name'],
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'You must put the role'],
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', UserSchema);