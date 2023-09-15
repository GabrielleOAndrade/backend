const express = require("express");
const app = express();

app.use(express.json());

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


app.post("/api/lista-tarefas", (request, response) => {
  const maxId =
    listaTarefas.length > 0 ? Math.max(...listaTarefas.map((t) => t.id)) : 0;

  const tarefa = request.body;
  console.log = tarefa;

  tarefa.id = maxId + 1;

  listaTarefas = listaTarefas.concat(tarefa);

  response.json(tarefa);
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
    listaTarefas = listaTarefas.filter((tarefa) => tarefa.id !== id);

    response.status(204).end();
  });

  response.json(tarefa);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
