const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateUser = [
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('lastname')
        .exists()
        .not()
        .isEmpty(),
    check('username')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Put a valid email'),
    check('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({min:6})
        .withMessage('Password must have minimum 6 caracters'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreateUser
}