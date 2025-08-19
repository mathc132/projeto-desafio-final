const pool = require("../../database");
const Produto = require("../entity/Produto");

class ProdutoRepository {
  async create(produto) {
    await pool.query(
      "INSERT INTO produtos (id, nome, preco, qtd, descricao) VALUES (?, ?, ?, ?, ?)",
      [produto.id, produto.nome, produto.preco, produto.qtd, produto.descricao]
    );
    return produto;
  }

  async findAll() {
    const [rows] = await pool.query("SELECT * FROM produtos");
    return rows.map(r => new Produto(r.id, r.nome, r.preco, r.qtd, r.descricao));
  }

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM produtos WHERE id = ?", [id]);
    if (rows.length === 0) return null;
    const r = rows[0];
    return new Produto(r.id, r.nome, r.preco, r.qtd, r.descricao);
  }

  async findByName(nome) {
    const [rows] = await pool.query("SELECT * FROM produtos WHERE nome LIKE ?", [`%${nome}%`]);
    return rows.map(r => new Produto(r.id, r.nome, r.preco, r.qtd, r.descricao));
  }

  async update(produto) {
    await pool.query(
      "UPDATE produtos SET nome = ?, preco = ?, qtd = ?, descricao = ? WHERE id = ?",
      [produto.nome, produto.preco, produto.qtd, produto.descricao, produto.id]
    );
    return produto;
  }

  async delete(id) {
    await pool.query("DELETE FROM produtos WHERE id = ?", [id]);
  }

  async count() {
    const [rows] = await pool.query("SELECT COUNT(*) AS total FROM produtos");
    return rows[0].total;
  }
}

module.exports = new ProdutoRepository();