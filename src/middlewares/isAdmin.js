const User = require('../models/User');
const Role = require('../models/Role');

async function isAdmin(req, res, next) {
    console.log('cesar',res.locals)
    const {id} = res.locals;
    const user = await User.findById(id).populate('role');
    console.log('user', user)
    if(!user) return res.status(404).send({message: "User not found"});

    if(user.role.name === "Admin"){
        next();
    }else{
        return res.status(403).send({message: "Role not authorized"})
    }

}

module.exports = {isAdmin}