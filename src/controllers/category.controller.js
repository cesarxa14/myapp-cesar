const Category = require('../models/Category');

const getCategories = async (req, res) => {
    const categories = await Category.find();

    res.status(200).json({data: categories});
}

const createCategory = async (req, res) => {
    const {name} = req.body;
    const newCategory = new Category({
        name
    });

    const categorySaved = await newCategory.save();
    res.status(201).json({data: categorySaved});
}

const updateCategory = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const {id} = req.params;
    const {name} = req.body;

    const categoryUpdated = await Category.findByIdAndUpdate(id, {name});
    res.status(200).json({message: 'Category updated', data: categoryUpdated});
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    const categoryDeleted = await Category.findByIdAndDelete(id);
    res.status(200).json({message: 'Category deleted', data: categoryDeleted});
}

module.exports.CategoryController = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}