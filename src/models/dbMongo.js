const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        mongoose.connect( process.env.MONGODB_URI ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connectado a la base de datos de mongo")
    } catch (error) {
        console.log(`No se pudo conectar la base de datos: ${error}`)
    }
}

module.exports = connectDB