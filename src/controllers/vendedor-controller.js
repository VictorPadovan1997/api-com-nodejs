const Vendedor = require('../app/models/vendedor');
const repository = require('../repositories/vendedor-repository')

exports.post = async (req, res) => {
    try {
        await repository.post({
            nome: req.body.nome,
        });
        res.status(201).send({
            message: 'Vendedor cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAll = async (req, res) => {

    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.vendedorId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.vendedorId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "Vendedor atualizado com sucesso",
            dados: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }

}



exports.delete = async (req, res) => {
    try {
        const id = req.params.vendedorId;
        await repository.delete(id)
        res.status(200).send({
            message: 'Vendedor removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};





