const Role = require('../models/Role');

const getRoles = async (req, res) => {
    try{
        const roles = await Role.find();
        res.status(200).json({data: roles});
    } catch(err) {
        console.log('err', err);
    }
    
}
const createRole = async (req, res) => {
    try{
        const {name} = req.body;
        const newRole = new Role({
            name
        });
        const roleSaved = await newRole.save();
        res.status(201).json({data: roleSaved});
    } catch(err) {
        console.log('err', err);
    }  
}

const updateRole = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const roleUpdated = await Role.findByIdAndUpdate(id, {name});
    if(!roleUpdated){
        return res.status(404).send({message: "Role not found"})
    }
    return res.status(200).json({message: 'Role updated', data: roleUpdated});
}

const deleteRole = async (req, res) => {
    const {id} = req.params;
    const roleDeleted = await Role.findByIdAndDelete(id);
    if(!roleDeleted){
        return res.status(404).send({message: "Role not found"})
    }
    return res.status(200).json({message: 'Role deleted', data: roleDeleted});
}



module.exports.RoleController = {
    getRoles,
    createRole,
    updateRole,
    deleteRole
}