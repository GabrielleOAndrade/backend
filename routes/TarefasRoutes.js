const router = require("express").Router();

const TarefasController = require("../controller/TarefasController");

router.get("/", TarefasController.read);

router.post("/" , TarefasController.create );

router.put("/:id", TarefasController.update);

router.get("/:id", TarefasController.readById);

router.delete("/:id", TarefasController.del);

module.exports = router;
