const express = require('express')
var router = express.Router(); //interceptação das rotas

var Vendedor = require("../app/models/vendedor");

//Post
router.post("/", function (req, res) 
{
    var vendedor = new Vendedor();
    vendedor.nome = req.body.nome;
    vendedor.save(function (error) {
        if (error)
            res.send("Erro ao tentar salvar o vendedor" + error);

        res.status(201).json({ message: 'Done !' });

    });

});

//Get All
router.get("/", function (req, res) {
    Vendedor.find(function (err, cat) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: 'Vendedor retornados',
            vendedor: cat
        });
    });
});

//FindById
router.get("/:vendedorId", function (req, res) {
    const id = req.params.vendedorId;

    Vendedor.findById(id, function (err, vendedor) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar"
            });
        }

        else if (vendedor == null) {
            res.status(400).json({
                message: " não encontrada"
            });
        }
        else {
            res.status(200).json({
                message: "Done.",
                vendedor: vendedor
            });
        }

    });

});


//PUT
router.put("/:vendedorId", function (req, res) {
    const id = req.params.vendedorId;

    Vendedor.findById(id, function (err, vendedor) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar"
            });
        }

        else if (vendedor == null) {
            res.status(400).json({
                message: "não encontrada"
            });
        }
        else {
            vendedor.nome = req.body.nome;
            vendedor.produto = req.body.produto;

            vendedor.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar" + error);
                
                res.status(200).json({
                    message:"atualizada com sucesso"
                });
              
            });
        }

    });

});

//DELETE
router.delete("/:vendedorId", function(req, res){
    Vendedor.findByIdAndRemove(req.params.vendedorId, (err, vendedor) =>{
        if(err) 
            return res.status(500).send(err);

        const response = {
            message:" removida com sucesso",
            id: vendedor.id
        }; 
        return res.status(200).send(response);
    });
});

module.exports = router;