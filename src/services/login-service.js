const User = require("../app/models/user");
const loginRepository = require('../repositories/login-repository')

//User-Post-Controller
exports.post = async (req, res) => {
    try {
        await loginPepository.post({
            login: req.body.login,
            senha: req.body.senha
        });
        res.status(201).send({
            message: "login realizado com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao tentar login",
            erro: error
        });

    }
}