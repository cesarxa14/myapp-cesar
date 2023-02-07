const {Schema} = require('mongoose');
const productSchema = {
    product: {
        type: "object",
        required: ["code", "name", "description", "price", "urlImage", "_category", "_user"],
        properties: {
            code: {
                type: "string"
            },
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            price: {
                type: "number"
            },
            urlImage: {
                type: "string"
            },
            _category: {
                type: Schema.Types.ObjectId,
            },
            _user: {
                type: Schema.Types.ObjectId,
            }
        }
    }
};

module.exports = productSchema;