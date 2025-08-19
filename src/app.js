const express = require("express");
const router = require("./routes/ProdutoRoutes");

const app = express();
app.use(express.json());

app.use("/produtos", router);

module.exports = app;