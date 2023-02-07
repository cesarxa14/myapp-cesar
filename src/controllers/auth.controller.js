const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../config/mailer');
require('dotenv').config();


const SignIn = async (req, res) => {

    try{
        const {username, password} = req.body;
        const userFound = await User.findOne({username: username});

        if(!userFound) {
            return res.status(404).send({message: "User not found"})
        } 
        const passwordsCompared = await bcrypt.compare(password, userFound.password);
        if(!passwordsCompared){
            return res.status(400).send({message: "Invalid password"})
        }

        const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET_KEY);

        res.json({data:userFound, token});
    } catch(err) {
        return res.status(400).send({error:err})
    }
    
} 

const SignUp = async (req, res) => {
    try{
        const {name, lastname, username, email, password, role} = req.body;
        //hash password
        const salt = await bcrypt.genSalt(10);
        const passwordEncrypt = await bcrypt.hash(password, salt)
        const newUser = await new User({
            name,
            lastname,
            username,
            email, 
            password: passwordEncrypt, 
            role,
        });

        const userSaved = await newUser.save();
        console.log('userSaved', userSaved);
        const token = jwt.sign({id: userSaved._id}, process.env.JWT_SECRET_KEY , {expiresIn: 3600}); // TODO poner la key en dotenv

        await sendEmail(userSaved.email); // envia el correo
        return res.status(201).json({
            token,
            data: userSaved
        });
    } catch (err){
        return res.status(400).send({error:err})
    }
    

} 

async function sendEmail(email){
    await transporter.sendMail({
        from: "Verify your email <cetolara06@gmail.com>",
        to: email,
        subject: "Verify your email",
        html: "<h1>Verify your email</h1>"
    });

    console.log(`Email sent succesfully to ${email}`);

}

module.exports.AuthController = {
    SignIn,
    SignUp
}