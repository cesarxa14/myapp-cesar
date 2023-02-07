const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateProduct = [
    check('code')
        .exists()
        .not()
        .isEmpty(),
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('description')
        .exists()
        .not()
        .isEmpty()
        .isLength({max: 100})
        .withMessage('Description must have maximun 100 caracters'),
    check('price')
        .exists()
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Put a valid number'),
    check('urlImage')
        .exists(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateCreateProduct
}