const express = require('express')
var router = express.Router(); //interceptação das rotas
const vendedorController = require('../controllers/vendedor-controller')

//Post
router.post("/", vendedorController.post);

//Get All
router.get("/", vendedorController.getAll);

//FindById
router.get("/:vendedorId", vendedorController.getById);

//PUT
router.put("/:vendedorId", vendedorController.put);

//DELETE
router.delete("/:vendedorId", vendedorController.delete);

module.exports = router;
