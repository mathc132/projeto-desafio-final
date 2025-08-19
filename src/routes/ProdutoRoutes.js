const express = require("express");
const ProdutoController = require("../controller/ProdutoController");

const router = express.Router();

router.post("/", ProdutoController.create);
router.get("/", ProdutoController.findAll);
router.get("/count", ProdutoController.count);
router.get("/search", ProdutoController.findByName);
router.get("/:id", ProdutoController.findById);
router.put("/:id", ProdutoController.update);
router.delete("/:id", ProdutoController.delete);

module.exports = router;