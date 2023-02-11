'use strict'

var express = require('express');
var jwt = require('jsonwebtoken');
var UsuarioController = require('../controllers/usuario');


var router = express.Router();

// RUTAS PARA USUARIOS

router.get('/usuarios', (req, res) => {
    jwt.sign({ usuario: UsuarioController.list}, 'secretkey', {expiresIn: '32s'}, (err, token) => {
        res.json({
            token: token
        });
    });
});

router.get('/usuarios/:id', UsuarioController.find);

router.post('/usuarios/save', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {
            res.json({
                mensaje: "Post fue creado",
                authData: authData
            })
            UsuarioController.save;
        }
    });
});

// REGISTRO Y LOGIN



// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}


module.exports = router;