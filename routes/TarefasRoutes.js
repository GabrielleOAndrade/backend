const router = require("express").Router();

const TarefasController = require("../controller/TarefasController");
const imageUpload = require("../helpers/imageUpload");

router.get("/", TarefasController.read);

router.post("/" , imageUpload.single('foto'), TarefasController.create );

router.put("/:id", TarefasController.update);

router.get("/:id", TarefasController.readById);

router.delete("/:id", TarefasController.del);

module.exports = router;
