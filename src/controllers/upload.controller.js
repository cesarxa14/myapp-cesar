const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        console.log('file', file)
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage});


const upload2 = upload.single('myfile')

const uploadFile = (req, res) => {
    try{
        return res.send({msg:'Uploaded file'})
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

module.exports.UploadController = {
    uploadFile,
    upload2
}