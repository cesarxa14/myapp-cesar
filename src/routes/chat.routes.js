const {Router} = require('express');
const router = Router();
const {ChatController} = require('../controllers/chat.controller');


function ChatRoutes(app){
    app.use('/chats', router);

    /**
     * @openapi
     * /categories:
     *  get:
     *      tags:
     *          - Categories
     *      summary: "List categories"
     *      description: "This endpoint get all categories"
     *      responses: 
     *          '200':
     *              description: Return all categories
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/category'
     *          '400':
     *              description: Categories not found
     *      security:
     *          - bearerAuth: []
     */
    // router.get('/', CategoryController.getCategories);

    router.get('/', ChatController.getChats);
    router.get('/:id', ChatController.getChat);
    router.post('/getOneChat', ChatController.getOneChat);

    /**
     * @openapi
     * /chats:
     *  post:
     *      tags:
     *          - Chats
     *      summary: "Create chat"
     *      description: "This endpoint create a chat"
     *      requestBody:
     *          description: Create a new chat
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/chat'
     *      responses:
     *          '200':
     *              description: Chat created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/chat'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', ChatController.createChat);
    
 
}

module.exports = {ChatRoutes};