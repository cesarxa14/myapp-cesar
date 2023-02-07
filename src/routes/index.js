const {Router} = require('express');
const {UserRoutes} = require('./user.routes');
const {AuthRoutes} = require('./auth.routes');
const {RoleRoutes} = require('./role.routes');
const {CategoryRoutes} = require('./category.routes');
const {ProductRoutes} = require('./product.routes');
const {UploadRoutes} = require('./upload.routes');
const {MercadoPagoRoutes} = require('./mercadopago.routes');
const { ChatRoutes } = require('./chat.routes');
const { MessageChatRoutes } = require('./messagechat.routes');
const router = Router();

function indexRoutes(app){
    UserRoutes(app);
    AuthRoutes(app);
    RoleRoutes(app);
    CategoryRoutes(app);
    ProductRoutes(app);
    UploadRoutes(app);
    MercadoPagoRoutes(app);
    ChatRoutes(app);
    MessageChatRoutes(app)
}

module.exports = {indexRoutes};