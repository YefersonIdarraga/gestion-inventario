const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://Yeferson:STnBJlcVDOe50j8y@cluster0.8cuvcrf.mongodb.net/?retryWrites=true&w=majority');

client.connect().then(
    (response) => {
        console.log('La conexion a la bd es correcta - url:'+ response.url);
    },
    (error) => {
        console.log('error:'+error)
    }
)

module.exports = client;