const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://cesarxavi06:chelseafc11@cluster0.7c7wzd7.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> {
        console.log('Connected to database succesfully!')
    }).catch((err)=> {
        console.log('Error with database: ', err);
    })

module.exports = mongoose;