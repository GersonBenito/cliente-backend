const { connect } = require('mongoose');

const dbConection = async () =>{
    try {
        await connect(process.env.DB_CONECTION, {
            useNewUrlParser: true
        });

        console.log('Conectado a la base de datos de mongo');
    } catch (error) {
        console.log('ocurrio un error al intentar conectarse a la base de datos', error);
    }
}

module.exports = { dbConection }