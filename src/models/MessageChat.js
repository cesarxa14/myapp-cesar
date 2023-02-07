const {Schema, model} = require('mongoose');

const MessageChatSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
    }
   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('MessageChat', MessageChatSchema);