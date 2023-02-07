const {Router} = require('express');
const router = Router();
const {RoleController} = require('../controllers/role.controller');
const {verifyToken} = require('../middlewares/verifyToken');
const {validateCreateRole} = require('../validators/role');
function RoleRoutes(app) {
    app.use(('/roles'), router);

    
    /**
     * @openapi
     * /roles:
     *  get:
     *      tags:
     *          - Role
     *      summary: "List roles"
     *      description: "This endpoint get all roles"
     *      responses: 
     *          '200':
     *              description: Return all roles
     *              content: 
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: '#/components/schemas/role'
     *          '400':
     *              description: Roles not found
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', RoleController.getRoles);

    /**
     * @openapi
     * /roles:
     *  post:
     *      tags:
     *          - Role
     *      summary: "Create role"
     *      description: "This endpoint create a role"
     *      requestBody:
     *          description: Create a new role
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/role'
     *      responses:
     *          '200':
     *              description: Role created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/role'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [validateCreateRole], RoleController.createRole);

    /**
     * @openapi
     * /roles/{id}:
     *  put:
     *      tags:
     *          - Role
     *      summary: "Update role"
     *      description: "This endpoint update a role"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Role ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Update a role
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/role'
     *      responses:
     *          '200':
     *              description: role created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/role'
     *          
     * 
     */
    router.put('/:id', [verifyToken], RoleController.updateRole);

    /**
     * @openapi
     * /roles/{id}:
     *  delete:
     *      tags:
     *          - Role
     *      summary: "Delete role"
     *      description: "This endpoint delete a role"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Role ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Role deleted
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/role'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken], RoleController.deleteRole);
}

module.exports = {RoleRoutes};