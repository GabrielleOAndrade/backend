const express = require("express");
const app = express();

let listaTarefas = [
  {
    id: 1,
    nome: "Estudar HTML",
  },
  {
    id: 2,
    nome: "Estudar CSS",
  },
  {
    id: 3,
    nome: "Estudar React",
  },
];
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/lista-tarefas", (request, response) => {
  response.json(listaTarefas);
});

app.get("/api/lista-tarefas/:id", (request, response) => {
  const id = Number(request.params.id);
  const tarefa = listaTarefas.find((tarefas) => tarefas.id === id);

  if (listaTarefas) {
    response.json(tarefa);
  } else {
    response.status(404).end();
  }

  app.delete("/api/lista-tarefas/:id", (request, response) => {
    const id = Number(request.params.id);
    tarefas = listaTarefas.filter((tarefa) => tarefa.id !== id);

    response.status(204).end();
  });

  response.json(tarefa);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
