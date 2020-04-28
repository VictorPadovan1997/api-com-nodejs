const express = require('express')
var router = express.Router(); //interceptação das rotas

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  var email = req.body.email;
  var senha = req.body.senha;
  var fs = require('fs');

    fs.writeFile("/workspace/Trabalho-Navarro/meuarquivo.txt", 'Email:' + email + ' ' + 'Senha:' + senha, function(erro) {
    if(erro) {
        throw erro;
    }
}); 
  next();
 
});


router.get('/', (req, res) => res.json({message:'Tudo certo aqui com as Rotas'}));

module.exports = router;