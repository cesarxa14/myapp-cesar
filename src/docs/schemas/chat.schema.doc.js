const chatSchema = {
    chat: {
        type: "object",
        required: ["users"],
        properties: {
            users: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            },
            messagesChat: {
                type: "array",
                items: {
                    type: "string"
                },
                default: []
            }
        }
    },
}

module.exports = chatSchema;