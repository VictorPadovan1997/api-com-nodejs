const mongoose = require("mongoose")
const express = require('express')
//Evita erros durante o processo de desenvolvinento passando com Promise
mongoose.Promise = global.Promise;
//Configura banco
mongoose.connect("mongodb://localhost/conectaBanco").then(() => {
    console.log('MongoDBConectado')
}).catch((err) => {
    console.log('erro')
})