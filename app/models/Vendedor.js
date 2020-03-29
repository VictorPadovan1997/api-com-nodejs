var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema.types.ObjectId -> Vai armazenar um ID de um objeto objeto passado na referencia
var vendedorSchema = new Schema({
    nome:{type:String, required : true},
    produto:{type:Schema.Types.ObjectId, ref:"Produto", required: true}
});

module.exports = mongoose.model('Vendedor', vendedorSchema);