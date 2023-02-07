const {Router} = require('express');
const router = Router();
const {UploadController} = require('../controllers/upload.controller');


function UploadRoutes(app) {
    app.use(('/upload'), router);

    
    router.post('/', UploadController.upload2 ,UploadController.uploadFile);

  
}

module.exports = {UploadRoutes};