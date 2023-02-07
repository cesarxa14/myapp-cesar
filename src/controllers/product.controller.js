const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        console.log('products', products)
        res.status(200).json({data: products});
    }catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const getProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product) {
            return res.status(404).send({message:"Product not found"});
        }
        return res.status(200).json({data:product});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const createProduct = async (req, res) => {
    try{
        const {code, name, description, price, _category, _user } = req.body;
        const newProduct = new Product({
            code,
            name, 
            description,
            price,
            _category,
            _user,
        });

        const productSaved = await newProduct.save();
        return res.status(201).json({data: productSaved});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const updateProduct = async (req, res) => {
    try{
        console.log(req.params);
        console.log(req.body);
        const {id} = req.params;
        const {code, name, description, price} = req.body;

        const productUpdated = await Product.findByIdAndUpdate(id, {code, name, description, price});
        return res.status(200).json({message: 'Product updated', data: productUpdated});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const productDeleted = await Product.findByIdAndDelete(id);
        return res.status(200).json({message: 'Product deleted', data: productDeleted});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

module.exports.ProductController = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}