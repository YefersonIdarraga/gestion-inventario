"use strict";

// REQUIRES
var express = require("express");
var bodyParser = require("body-parser");

// USO EXPRESS
var app = express();

// CARGA ARCHIVOS DE RUTAS
var producto_routes = require('./routes/producto');

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CONFIGURACION DE CABECERAS Y CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  req.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// REESCRIBIR RUTAS
app.use('/api', producto_routes);

// EXPORTAR MODULO
module.exports = app;
