import { query } from "../config/db.js";

export const chefRepository = {

  async findAll() {
    const res = await query("SELECT * FROM tb_usuario WHERE tipo = 'chef' ORDER BY id_usuario;");
    return res.rows;
  },

  async create(chef) {
    const { nome, nome_usuario, email, senha, imagem_usuario, tipo = 'chef' } = chef;
    const now = new Date().toISOString();

    const sql = `
      INSERT INTO tb_usuario (nome, nome_usuario, email, senha, imagem_usuario, tipo, created_at, updated_at) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *;
    `;
    const res = await query(sql, [nome, nome_usuario, email, senha, imagem_usuario, tipo, now, now]);
    return res.rows[0];
  },

  async findById(id) {
    const res = await query('SELECT * FROM tb_usuario WHERE id_usuario = $1;', [id]);
    return res.rows[0];
  },

  async delete(id) {
    const res = await query('DELETE FROM tb_usuario WHERE id_usuario = $1 RETURNING *;', [id]);
    return res.rows[0];
  },

  async update(id, chef) {
    const { nome, nome_usuario, email, senha, imagem_usuario, tipo = 'chef' } = chef;
    const updatedAt = new Date().toISOString();

    const sql = `
      UPDATE tb_usuario 
      SET nome = $1, nome_usuario = $2, email = $3, senha = $4, imagem_usuario = $5, tipo = $6, updated_at = $7 
      WHERE id_usuario = $8 
      RETURNING *;
    `;
    const res = await query(sql, [nome, nome_usuario, email, senha, imagem_usuario, tipo, updatedAt, id]);
    return res.rows[0];
  },

  async patch(id, chef) {
    const { nome, nome_usuario, email, senha, imagem_usuario, tipo } = chef;
    const updatedAt = new Date().toISOString();

    const sql = `
      UPDATE tb_usuario 
      SET nome = COALESCE($1, nome), 
          nome_usuario = COALESCE($2, nome_usuario), 
          email = COALESCE($3, email), 
          senha = COALESCE($4, senha), 
          imagem_usuario = COALESCE($5, imagem_usuario), 
          tipo = COALESCE($6, tipo),
          updated_at = $7
      WHERE id_usuario = $8 
      RETURNING *;
    `;
    const res = await query(sql, [
      nome ?? null,
      nome_usuario ?? null,
      email ?? null,
      senha ?? null,
      imagem_usuario ?? null,
      tipo ?? null,
      updatedAt,
      id
    ]);

    return res.rows[0];
  }
};