import mongoose from "mongoose"
import { criarColecao } from "./criar-colecao.js"

export const marcasSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    site: { type: String, required: true},
    telefone: { type: String, required: true},
});

export const produtosSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    preco: { type: Number, required: true},
    estoque: { type: Number, required: true},
    marca: { type: String, required: true}
});

export const pedidosSchema = new mongoose.Schema({
    data_pedido: { type: Date, required: true},
    id_cliente: { type: Number, required: true},
    valor_total:{ type: Number, required: true}
});
export const colecoesParaCriar = async () => {
    const schemasParaCriar = [
        { name: 'marcas', schema: marcasSchema },
        { name: 'produtos', schema: produtosSchema },
        { name: 'pedidos', schema: pedidosSchema }
    ]

    return await criarColecao(schemasParaCriar)
}

export const MarcaModel = mongoose.model('marcas', marcasSchema);
export const ProdutoModel = mongoose.model('produtos', produtosSchema);
export const PedidoModel = mongoose.model('pedido', pedidosSchema);
