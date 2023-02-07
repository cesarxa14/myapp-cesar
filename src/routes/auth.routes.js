const {Router} = require('express');
const router = Router();
const {AuthController} = require('../controllers/auth.controller');
const {validateCreateUser } = require('../validators/user');

function AuthRoutes(app) {
    app.use(('/auth'), router); 

    router.get('/', (req, res) => res.json({msg:'auth route'}))

    /**
     * @openapi
     * /auth/sign-up:
     *  post:
     *      tags:
     *          - Auth
     *      summary: "Sign Up"
     *      description: "Register user"
     *      requestBody:
     *          description: Register a new user
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/authSignUp'
     *      responses:
     *          '200':
     *              description: User registered
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/auth'
     * 
     */
    router.post('/sign-up', [validateCreateUser], AuthController.SignUp);

    /**
     * @openapi
     * /auth/sign-in:
     *  post:
     *      tags:
     *          - Auth
     *      summary: "Sign In"
     *      description: "Login user"
     *      requestBody:
     *          description: Login a user
     *          content: 
     *              application/json:
     *                  schema:
     *                      $ref: '#/components/schemas/authSignIn'
     *      responses:
     *          '200':
     *              description: User registered
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/auth'
     * 
     */
    router.post('/sign-in', AuthController.SignIn);
}

module.exports = {AuthRoutes};