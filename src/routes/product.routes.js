const {Router} = require('express');
const router = Router();
const {ProductController} = require('../controllers/product.controller');
const {verifyToken} = require('../middlewares/verifyToken');
const {validateCreateProduct} = require('../validators/product');

function ProductRoutes(app) {
    app.use(('/products'), router);

    /**
     * @openapi
     * /products:
     *  get:
     *      tags:
     *          - Products
     *      summary: "List products"
     *      responses: 
     *          '200':
     *              description: Return all products
     *          '400':
     *              description: Products not found
     *      security:
     *          - bearerAuth: []
     */
    router.get('/', [verifyToken], ProductController.getProducts)

    /**
     * @openapi
     * /products/{id}:
     *  get:
     *      tags:
     *          - Products
     *      summary: "Get single product"
     *      description: "This endpoint get a product"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Product ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Product got
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/product'
     *          
     * 
     */
    router.get('/:id', [verifyToken], ProductController.getProduct);

    /**
     * @openapi
     * /products:
     *  post:
     *      tags:
     *          - Products
     *      summary: "Create product"
     *      description: "This endpoint create a product"
     *      requestBody:
     *          description: Create a new product
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/product'
     *      responses:
     *          '200':
     *              description: Product created
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/product'
     *      security:
     *          bearerAuth: []
     * 
     */
    router.post('/', [verifyToken, validateCreateProduct], ProductController.createProduct);

    /**
     * @openapi
     * /products/{id}:
     *  put:
     *      tags:
     *          - Products
     *      summary: "Update product"
     *      description: "This endpoint update an product"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Product ID'
     *            required: true
     *            schema:
     *              type: string
     *      requestBody:
     *          description: Update a product 
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/product'
     *      responses:
     *          '200':
     *              description: User updated
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/product'
     *          
     * 
     */
    router.put('/:id', [verifyToken], ProductController.updateProduct);
    
    /**
     * @openapi
     * /products/{id}:
     *  delete:
     *      tags:
     *          - Products
     *      summary: "Delete product"
     *      description: "This endpoint delete an product"
     *      parameters:
     *          - in: path
     *            name: id
     *            description: 'Product ID'
     *            required: true
     *            schema:
     *              type: string
     *      responses:
     *          '200':
     *              description: Product deleted
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/product'
     *          
     *      security:
     *         - bearerAuth: []
     */
    router.delete('/:id', [verifyToken], ProductController.deleteProduct);
}

module.exports = {ProductRoutes};