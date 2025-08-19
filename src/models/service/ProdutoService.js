const Produto = require("../entity/Produto");
const ProdutoRepository = require("../repository/ProdutoRepository");

class ProdutoService {
  generateId() {
    return Math.floor(Math.random() * 1000000); // Pode ser trocado por UUID
  }

  async create(data) {
    const id = this.generateId();
    const produto = new Produto(id, data.nome, data.preco, data.qtd, data.descricao);
    return await ProdutoRepository.create(produto);
  }

  async findAll() {
    return await ProdutoRepository.findAll();
  }

  async findById(id) {
    return await ProdutoRepository.findById(id);
  }

  async findByName(nome) {
    return await ProdutoRepository.findByName(nome);
  }

  async update(id, data) {
    const produto = new Produto(id, data.nome, data.preco, data.qtd, data.descricao);
    return await ProdutoRepository.update(produto);
  }

  async delete(id) {
    await ProdutoRepository.delete(id);
  }

  async count() {
    return await ProdutoRepository.count();
  }
}

module.exports = new ProdutoService();