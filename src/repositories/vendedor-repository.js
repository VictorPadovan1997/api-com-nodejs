var Vendedor = require('../app/models/vendedor');
var mongoose = require('mongoose');

exports.get = async () => {
    const res = await Vendedor.find();
    return res;
}


exports.getById = async (id) => {
    const res = await Vendedor.findById(id);
    return res;
}

exports.put = async (id, data) => {
    await Vendedor.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
        }
    });
}

exports.post = async (data) => {
    var vendedor = new Vendedor(data);
    await vendedor.save();
}

exports.delete = async (id) => {
    await Vendedor.findOneAndRemove(id);
}
