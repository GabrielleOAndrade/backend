const express = require("express");
const TarefasRoutes = require("./routes/TarefasRoutes");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

//Public folder for images
app.use(express.static('public'))

app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.use("/api/persons", TarefasRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
