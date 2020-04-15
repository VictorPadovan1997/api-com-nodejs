//Repository Refatoração Para seguir padrões de projetos
var User = require('../app/models/user');
var mongoose = require('mongoose');

exports.get = async () => {
    const res = await User.find();
    return res;
}


exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

exports.put = async (id, data) => {
    await User.findByIdAndUpdate(id, {
        $set: {
            email: data.email,
            senha: data.senha,

        }
    });
}

exports.post = async (data) => {
    var user = new User(data);
    await user.save();
}

exports.delete = async (id) => {
    await User.findOneAndRemove(id);
}

exports.validatePassword = async (email, password) => {
    const res = await User.findById({email: email, password: password});
    return res;
}
