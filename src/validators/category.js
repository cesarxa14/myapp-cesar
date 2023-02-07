const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateCategory = [
    check('name')
        .exists()
        .not()
        .isEmpty()
        .isLength({max: 40})
        .withMessage('Name must have maximum 40 caracters'),
    check('active')
        .isBoolean(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    validateCreateCategory
}