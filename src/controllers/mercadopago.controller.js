const mercadopago = require('mercadopago');
require('dotenv').config();

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN_TEST
});



const payProduct = async (req, res) => {
    try{
        let preference = {
            items: [
              {
                title: 'MyApp Test',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 5
              }
            ]
          };
          
        const pago = await mercadopago.preferences.create(preference)
        console.log('pago', pago)
        return res.send({msg: 'pay product', data: pago})
    } catch(err) {
        console.log(err);
        return res.json(err);
    }
    
}

module.exports.MercadoPagoController = {
    payProduct
}