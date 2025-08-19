const ProdutoService = require("../models/service/ProdutoService");

class ProdutoController {
  async create(req, res) {
    try {
      const produto = await ProdutoService.create(req.body);
      res.status(201).json(produto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findAll(req, res) {
    try {
      const produtos = await ProdutoService.findAll();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findById(req, res) {
    try {
      const produto = await ProdutoService.findById(req.params.id);
      if (!produto) return res.status(404).json({ message: "Produto não encontrado" });
      res.json(produto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findByName(req, res) {
    try {
      const produtos = await ProdutoService.findByName(req.query.nome);
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const produto = await ProdutoService.update(req.params.id, req.body);
      res.json(produto);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await ProdutoService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async count(req, res) {
    try {
      const total = await ProdutoService.count();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ProdutoController();
