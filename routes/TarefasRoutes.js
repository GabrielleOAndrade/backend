const router = require('express').Router();

router.get((request, response) => {
    conn('tab_tarefas')
    .select()
    .then((tarefas) => {
      response.json(tarefas);
    });
  });
  
  router.post((request, response) => {
    const nome = request.body.nome;
  
      if (!nome) {
      return response.status(400).json({
        error: "Nome da tarefa não fornecido",
      });
    }
    conn ('tab_tarefas')
    .insert({ nome:nome })
    .then ((tarefa) => {
      response.json(tarefa);
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao inserir a tarefa no banco de dados",
      });
    })
  });
  
  app.put("/:id", (request, response) => {
    const nome = request.body.nome;
    const id = Number(request.params.id);
  
      if (!nome) {
      return response.status(400).json({
        error: "Nome da tarefa não fornecido",
    
      });
    }
    conn ('tab_tarefas')
    .update ({ nome:nome })
    .then (_) => {
    .where( { id: id })  
      response
      .status(200)
      .json({ msg: "Tarefa atualizada com sucesso!"});
  
   })
    
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao inserir a tarefa no banco de dados",
      });
    });
  
  app.get("/:id", (request, response) => {
    const id = Number(request.params.id); // 1 == 1 | 1 == "1"
    conn ('tab_tarefas').select().where( { id: id }).then((tarefas) => {
    response.status(200).json(tarefa);
    })
    .catch((error) => {
      response.status(500).json({
        error:"Erro ao buscar a tarega no banco de dados"
      });
    });
  
    });
  
   app.delete("/:id", (request, response) => {
   const id = Number(request.params.id);
   conn ('tab_tarefas')
   .del().where({ 'id' : id })
   .then((_) => {
  response.status(200).json({ msg:'A tarefa foi excluída!'});
   })
  .catch((error) => {
    response.status(500).json({
      error: "Erro ao excluir a tarefa no banco de dados",
    });
  })
  });

  module.exports = router; 