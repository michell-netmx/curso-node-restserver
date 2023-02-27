const express = require('express');
var cors = require('cors')

module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        // lectura y Parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        });
    }
}