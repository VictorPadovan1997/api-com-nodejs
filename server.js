// import express from 'express';
// import bodyParser from 'body-parser';
var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTÊNCIA
//mongoose.connect('mongodb://localhost/bdCrud', {useNewUrlParser:true});
mongoose.connect('mongodb+srv://victorpadovan1997:majority@trabalhonavarro-1q870.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true});

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//ROTAS
//var indexRoute = require("./src/routes/index-routes");
var productRoute = require("./routes/product-routes");
var vendedorRoute = require("./routes/vendedor-routes");

//Vincular a aplicacao (app) com o motor de rotas
//app.use('/api', indexRoute);
//Rotas para produtos
app.use('/api/products', productRoute);
app.use('/api/vendedor', vendedorRoute);

app.listen(port, () => {
    console.log('Done !');

});

