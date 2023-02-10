'use strict'

const { append } = require('express/lib/response')
// REQURIES
// const express = require('express');
var mongoose = require('mongoose');
var app = require('./app');

// PUERTO

var port = process.env.port || 3999;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Yeferson:STnBJlcVDOe50j8y@cluster0.8cuvcrf.mongodb.net/?retryWrites=true&w=majority'
                ,{ useNewUrlParser: true })
                .then(
                    () => {
                        console.log('La conexion a la database es correcta')
                        // CREAR SERVER
                        app.listen(port,() => {
                            console.log("El servidor http://localhost:3999 esta funcionando")
                        });
                    }
                )
                .catch(error => console.log(error));