import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados, utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytes"
  const db = conexao.db('imersao-instabytes');
  // Seleciona a coleção "posts"
  const colecao = db.collection('posts');
  // Retorna todos os documentos da coleção como um array
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db('imersao-instabytes');
  const colecao = db.collection('posts');
  return colecao.insertOne(novoPost)
}