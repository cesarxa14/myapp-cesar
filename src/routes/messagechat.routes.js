const {Router} = require('express');
const router = Router();
const {MessageChatController} = require('../controllers/messagechat.controller');

function MessageChatRoutes(app) {
    app.use(('/messages-chat'), router);

    router.post('/', MessageChatController.createMessageChat);

}

module.exports = {MessageChatRoutes};