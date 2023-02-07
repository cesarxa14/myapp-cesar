const {Router} = require('express');
const router = Router();
const {CategoryController} = require('../controllers/category.controller');
const {isAdmin} = require('../middlewares/isAdmin');
const {verifyToken} = require('../middlewares/verifyToken');
const {validateCreateCategory} = require('../validators/category');
function CategoryRoutes(app){
    app.use('/categories', router);

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
    router.get('/', CategoryController.getCategories);

    /**
     * @openapi
     * /categories:
     *  post:
     *      tags:
     *          - Categories
     *      summary: "Create category"
     *      description: "This endpoint create a category"
     *      requestBody:
     *          description: Create a new category
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/category'
     *      responses:
     *          '200':
     *              description: Category created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/category'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [validateCreateCategory],  CategoryController.createCategory);
    
    /**
     * @openapi
     * /categories/{id}:
     *  put:
     *      tags:
     *          - Categories
     *      summary: "Update category"
     *      description: "This endpoint update a category"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Category ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Update a new pet in the store
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/category'
     *      responses:
     *          '200':
     *              description: Category created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/category'
     *          
     * 
     */
    router.put('/:id',  CategoryController.updateCategory);

    /**
     * @openapi
     * /categories/{id}:
     *  delete:
     *      tags:
     *          - Categories
     *      summary: "Delete category"
     *      description: "This endpoint delete a category"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Category ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Category deleted
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/category'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id',  CategoryController.deleteCategory);
}

module.exports = {CategoryRoutes};