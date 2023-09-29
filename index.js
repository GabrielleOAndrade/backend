const express = require("express");
const conn = require('./db/conn');
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.get("/api/lista-tarefas", (request, response) => {
  conn('tab_tarefas')
  .select()
  .then((tarefas) => {
    response.json(tarefas);
  });
});

app.post("/api/lista-tarefas", (request, response) => {
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

app.put("/api/lista-tarefas/:id", (request, response) => {
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

app.get("/api/lista-tarefas/:id", (request, response) => {
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

 app.delete("/api/lista-tarefas/:id", (request, response) => {
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


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
