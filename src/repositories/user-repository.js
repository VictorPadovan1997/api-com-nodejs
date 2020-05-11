//Repository Refatoração Para seguir padrões de projetos
var User = require('../app/models/user');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

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
            login: data.login,
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

exports.login = async (mail, pass) => {
    const user = await User.findOne({ email: mail });
    const id = user._id;
    if (user.email === mail && user.validPassword(pass)) {
        const token = jwt.sign({id}, process.env.SECRET, {expiresIn:60}); //1 min
        return token;
    }else{
        throw ({ status: 404, code: 'Usuário não encontrados', message: 'tente outro email' });   
    }
}


exports.register = async (login, senha) => {
    const result = await User.find({ login: login });

    if (result.length > 0) {
        throw ({ status: 400, code: 'Usuário já existe', message: 'Erro' });
    }

    const newUser = new User();
    newUser.login = login;
    newUser.senha = newUser.generateHash(pass)
    newUser.save((err, res) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
    });

    return {
        user: newUser
    }

}
