import { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res)  {
    // Chama a função para obter os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia os posts como resposta em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body
    try {
        const postCriado = await criarPost(novoPost)
        res.status(200).json(postCriado)
    } catch (erro) {
        console.error(erro.message)
        res.status(500).json({'Erro': 'Falha na requisição'})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalName,
        alt: ""
    }
    try {
        const postCriado = await criarPost(novoPost)
        const imagemAtualizada = `upload/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado)
    } catch (erro) {
        console.error(erro.message)
        res.status(500).json({'Erro': 'Falha na requisição'})
    }
}

