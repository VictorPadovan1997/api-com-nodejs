var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendedorSchema = new Schema({
    nome: {
        type:String,
        required : 'Nome Obrigatorio',
    },
    
});

module.exports = mongoose.model('Vendedor', vendedorSchema);