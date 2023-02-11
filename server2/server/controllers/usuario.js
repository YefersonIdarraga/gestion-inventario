"use-strict";

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var client = require("../database/db");
var db = client.db("gestion-inventario");

var controller = {
  // LISTAR
  list: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion listar");
    db.collection("usuarios")
      .find()
      .toArray((error, dataUsuarios) => {
        if (error || !dataUsuarios) {
          return res.status(404).send({
            message: "No se encontro el usuario",
          });
        } else {
          return res.status(200).send({
            status: "success",
            usuarios: dataUsuarios[0],
          });
        }
      });
  },
  
  // BUSCAR
  find: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion find");
    db.collection("usuarios")
      .find({ usuarioId: parseInt(req.params.id) })
      .toArray((error, dataUsuarios) => {
        if (error || !dataUsuarios) {
          return res.status(404).send({
            message: "No se encontro el usuario",
          });
        } else {
          return res.status(200).send({
            status: "success",
            usuarios: dataUsuarios[0],
          });
        }
      });
  },
  // GUARDAR
  save: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion save");
    console.log(req.body);
    if (req.body.usuarioId == "0") {
      // NUEVO
      db.collection("usuarios")
        .count()
        .then((countUsuarios) => {
          var usuario = {};
          usuario.usuarioId = countUsuarios + 1;
          usuario.nombre = req.body.nombre;
          usuario.password = req.body.password;
          db.collection("usuarios").insertOne(usuario, (error, result) => {
            if (error) {
              return res.status(404).send({
                message: "No se pudo registrar el usuario",
              });
            } else {
              return res.status(200).send({
                status: "success",
                usuarios: result,
              });
            }
          });
        });
    } else {
      console.log("Entrando a editar");
      var usuario = {};
      usuario.usuarioId = parseInt(req.body.usuarioId);
      usuario.nombre = req.body.nombre;
      usuario.password = req.body.password;
      console.log(usuario);
      db.collection("usuarios").updateOne(
        { usuarioId: { $eq: parseInt(req.body.usuarioId) } },
        { $set: usuario },
        (error, result) => {
            if (error) {
              return res.status(404).send({
                message: "No se pudo editar el usuario",
              });
            } else {
              return res.status(200).send({
                status: "success",
                usuarios: result,
              });
            }
          } 
      );
    }
  },
};

// REGISTRO Y LOGIN

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', function(next){
  if (this.isNew || this.isModified('password')){
      const document = this;
      bcrypt.hash(document.password, saltRounds, (error, hashedPassword) => {
          if (err) {
            next(err);
          } else {
            document.password = hashedPassword;
            next();
          }
      })
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, same){
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

module.exports = mongoose.model('User', UserSchema);

module.exports = controller;
