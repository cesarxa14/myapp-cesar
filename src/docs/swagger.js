const swaggerJSDoc = require('swagger-jsdoc');

const userSchema = require('./schemas/user.schema.doc');
const authSchema = require('./schemas/auth.schema.doc');
const categorySchema = require('./schemas/category.schema.doc');
const productSchema = require('./schemas/product.schema.doc');
const roleSchema = require('./schemas/role.schema.doc');
const chatSchema = require('./schemas/chat.schema.doc');

const swaggerDefinition = {
    openapi: "3.0.1",
    info: {
        title: "Documentacion de MyApp César API Rest",
        description: "Esta es mi API destinada a mi portafolio",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: 'JWT',
            }
        },
        schemas: {
            // USER
            user: userSchema.user,
            userUpdate: userSchema.userUpdate,
            // AUTH
            authSignUp: authSchema.authSignUp,
            authSignIn: authSchema.authSignIn,
            // CATEGORY
            category: categorySchema.category,
            // PRODUCT
            product: productSchema.product,
            // ROLE
            role: roleSchema.role,
            // CHAT
            chat: chatSchema.chat
        }
    },
    

}


const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/routes/*.js"]
}

module.exports = swaggerJSDoc(swaggerOptions)