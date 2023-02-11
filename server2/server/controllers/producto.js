"use-strict";

var client = require("../database/db");
var db = client.db("gestion-inventario");

var controller = {
  // LISTAR
  list: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion listar");
    db.collection("productos")
      .find()
      .toArray((error, dataProductos) => {
        if (error || !dataProductos) {
          return res.status(404).send({
            message: "No se encontro el producto",
          });
        } else {
          return res.status(200).send({
            status: "success",
            productos: dataProductos[0],
          });
        }
      });
  },

  // BUSCAR
  find: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion find");
    db.collection("productos")
      .find({ productoId: parseInt(req.params.id) })
      .toArray((error, dataProductos) => {
        if (error || !dataProductos) {
          return res.status(404).send({
            message: "No se encontro el producto",
          });
        } else {
          return res.status(200).send({
            status: "success",
            productos: dataProductos[0],
          });
        }
      });
  },
  // GUARDAR
  save: function (req, res) {
    console.log("-------------");
    console.log("Entrando a la funcion save");
    console.log(req.body);
    if (req.body.productoId == "0") {
      // NUEVO
      db.collection("productos")
        .count()
        .then((countProductos) => {
          var producto = {};
          producto.productoId = countProductos + 1;
          producto.marca = req.body.marca;
          producto.descripcion = req.body.descripcion;
          producto.precio = req.body.precio;
          producto.imagen = req.body.imagen;
          db.collection("productos").insertOne(producto, (error, result) => {
            if (error) {
              return res.status(404).send({
                message: "No se pudo registrar el producto",
              });
            } else {
              return res.status(200).send({
                status: "success",
                productos: result,
              });
            }
          });
        });
    } else {
      console.log("Entrando a editar");
      var producto = {};
      producto.productoId = parseInt(req.body.productoId);
      producto.marca = req.body.marca;
      producto.descripcion = req.body.descripcion;
      producto.precio = req.body.precio;
      producto.imagen = req.body.imagen;
      console.log(producto);
      db.collection("productos").updateOne(
        { productoId: { $eq: parseInt(req.body.productoId) } },
        { $set: producto },
        (error, result) => {
            if (error) {
              return res.status(404).send({
                message: "No se pudo editar el producto",
              });
            } else {
              return res.status(200).send({
                status: "success",
                productos: result,
              });
            }
          } 
      );
    }
  },
};

module.exports = controller;
