var User = require('../controllers/usuario');
var express = require('express');
var router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save(err => {
        if (err) {
            res.status(500).send('Error al registrar el usuario');
        } else {
            res.status(200).send('El ususario se registro correctamente');
        }
    });
});

router.post('/authenticate', (req, res) => {
    const { username, password } = req.body;
    User.findOne({username}, (err, user) => {
        if (err) {
            res.status(500).send('Error al autenticar el usuario');
        } else if (!user) {
            res.status(500).send('El ususario no existe');
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if (err) {
                    res.status(500).send('Error al autenticar');
                } else if (result) {
                    res.status(200).send('Ususario autenticado correctamente');
                } else {
                    res.status(500).send('Usuario y/o contraseña incorrecta');
                }
            });
        }
    });
});