const conn = require('../db/conn');

const read = (request, response) => {
    conn('tab_tarefas')
    .select()
    .then((tarefas) => {
      response.json(tarefas);
    });
};

const create = (request,response) => {
    const nome = request.body.nome;
    if(!nome) {
        return reoponse.status(400).json({
        error: "Nome da tareda no banco de dados",
        });
    }
}

module.exports = { read, create }