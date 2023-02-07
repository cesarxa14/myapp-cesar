const {Router} = require('express');
const router = Router();
const {MercadoPagoController} = require('../controllers/mercadopago.controller');
const {verifyToken} = require('../middlewares/verifyToken');

function MercadoPagoRoutes(app) {
    app.use(('/mercadopago'), router);

    router.post('/pay-product', MercadoPagoController.payProduct);

  

}

module.exports = {MercadoPagoRoutes};