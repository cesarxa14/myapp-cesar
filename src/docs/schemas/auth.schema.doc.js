const {Schema} = require('mongoose');
const authSchema = {
    authSignUp: {
        type: "object",
        required: ["name", "lastname", "email", ,"username", "password", "role"],
        properties: {
            name: {
                type: "string"
            },
            lastname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            username: {
                type: "string"
            },
            password: {
                type: "string"
            },
            role: {
                type: Schema.Types.ObjectId,
                ref: 'Role'
            }
        }
    },
    authSignIn: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
            username: {
                type: "string",
            },
            password: {
                type: "string",
            },

        }
    }
}

module.exports = authSchema;