const {Schema, model} = require('mongoose');

const ChatSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    messagesChat: [{
        type: Schema.Types.ObjectId,
        ref: 'MessageChat',
        default: []
    }],
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Chat', ChatSchema);