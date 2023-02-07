const roleSchema = {
    role: {
        type: "object",
        required: ["name"],
        properties: {
            name: {
                type: "string"
            },
            active: {
                type: "boolean",
                default: true
            }
        }
    },
}

module.exports = roleSchema;