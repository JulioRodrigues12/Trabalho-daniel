import mongoose from "mongoose"
import { criarColecao } from "./criar-colecao.js"

export const colecoesParaCriar = async () => {
    const marcasSchema = ({
        name: 'marcas',
        schema: new mongoose.Schema({
            nome: { type: String, required: true},
            site: { type: String, required: true},
            telefone: { type: String, required: true},
        })
    })

    return await criarColecao([marcasSchema])
}