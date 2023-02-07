const categorySchema = {
    category: {
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

module.exports = categorySchema;