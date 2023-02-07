const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateRole = [
    check('name')
        .exists()
        .not()
        .isEmpty()
        .isLength({max: 20})
        .withMessage('Name must have maximum 20 caracters'),
    check('active')
        .isBoolean(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = {
    validateCreateRole
}