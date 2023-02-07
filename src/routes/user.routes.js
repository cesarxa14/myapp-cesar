const {Router} = require('express');
const router = Router();
const {UserController} = require('../controllers/user.controller');
const {verifyToken} = require('../middlewares/verifyToken');
const {validateCreateUser } = require('../validators/user');

// DOCU : https://editor.swagger.io/
function UserRoutes(app){
    app.use(('/users'), router);

    /**
     * @openapi
     * /users:
     *  get:
     *      tags:
     *          - Users
     *      summary: "List users"
     *      responses: 
     *          '200':
     *              description: Return all users
     *          '400':
     *              description: Users not found
     *      security:
     *          - bearerAuth: []
     */
    router.get('/' ,UserController.getUsers);

    /**
     * @openapi
     * /users/{id}:
     *  get:
     *      tags:
     *          - Users
     *      summary: "Get single user"
     *      description: "This endpoint get an user"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: User got
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/user'
     *          
     * 
     */
    router.get('/:id' ,UserController.getUser);

    /**
     * @openapi
     * /users/{id}:
     *  put:
     *      tags:
     *          - Users
     *      summary: "Update user"
     *      description: "This endpoint update an user"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Update an user 
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/userUpdate'
     *      responses:
     *          '200':
     *              description: User updated
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/userUpdate'
     *          
     * 
     */
    router.put('/:id' ,UserController.updateUser);
    
    /**
     * @openapi
     * /users/{id}:
     *  delete:
     *      tags:
     *          - Users
     *      summary: "Delete user"
     *      description: "This endpoint delete an user"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'User ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: User deleted
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/user'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id' ,UserController.deleteUser);

}



module.exports = {UserRoutes};