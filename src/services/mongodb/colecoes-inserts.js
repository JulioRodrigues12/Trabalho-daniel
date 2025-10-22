import mongoose from 'mongoose';
import { MarcaModel, PedidoModel, ProdutoModel } from './seed-colecoes.js'

const Marca = MarcaModel
const Produto = ProdutoModel
const Pedido = PedidoModel

export const colecoesInserts = async () => {

   
    const marcasParaInserir = [
        { nome: 'Xiaomi', site: 'Xiaomi.com', telefone: '0800-761-6758' },
        { nome: 'Motorola', site: 'Motorola.com', telefone: '0800-761-1234' }
    ];

    const produtosParaInserir = [
        { nome: 'Poco X5 pro', preco: 6000.00, estoque: 50, marca: 'Xiaomi' },
        { nome: 'Moto G 27', preco: 3000.00, estoque: 75, marca: 'Motorola' }
    ];
    

    const pedidosParaInserir = [
        { data_pedido: '2028-09-15', id_cliente: 1, valor_total: 4000 }, 
        { data_pedido: '2023-09-17', id_cliente: 2, valor_total: 15000 }
    ];


    try {
        console.log('--- Iniciando inserção de dados (Seeds) no MongoDB ---');
        
        await Marca.deleteMany({}); 
        console.log('Coleção "marcas" limpa.');

        let resultado = await Marca.insertMany(marcasParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'marcas'.`);
        
        
        await Produto.deleteMany({}); 
        console.log('Coleção "produtos" limpa.');

        resultado = await Produto.insertMany(produtosParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'produtos'.`);
        
    
        await Pedido.deleteMany({}); 
        console.log('Coleção "pedidos" limpa.');

        resultado = await Pedido.insertMany(pedidosParaInserir);

        console.log(`${resultado.length} documentos inseridos na coleção 'pedidos'.`);


    } catch (error) {
        console.error(' Erro ao executar seeds do MongoDB:', error);
    }
};