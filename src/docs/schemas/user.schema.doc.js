const userSchema = {
    user: {
        type: "object",
        required: ["name", "lastname", "email", "username", "password", "role"],
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
                type: "string"
            },
        }
    },
    userUpdate: {
        type: "object",
        required: ["name", "lastname", "email", "username"],
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
            }
        }
    }
        
}

module.exports = userSchema;
