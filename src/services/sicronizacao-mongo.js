import mongoose from 'mongoose';

import { database } from '../database/index.js'; 

import { MarcaModel, PedidoModel, ProdutoModel } from './mongodb/seed-colecoes.js';

const MarcaMongoModel = MarcaModel;
const ProdutoMongoModel = ProdutoModel 
const PedidoMongoModel = PedidoModel

export const syncMongoToMysql = async () => {
    try {
        console.log('\n--- Iniciando Sincronização (MongoDB -> MySQL) ---');
        
        const marcasMongo = await MarcaMongoModel.find({}).lean();
        
        if (marcasMongo.length > 0) {
            const marcasMysql = marcasMongo.map(marca => ({
                mongo_id: marca._id.toString(), 
                nome: marca.nome,
                site: marca.site,
                telefone: marca.telefone
            }));

            await database('marcas').del(); 
            await database('marcas').insert(marcasMysql);
            
            console.log(` Sincronização concluída: ${marcasMysql.length} registros inseridos na tabela 'marcas'.`);
        } else {
             console.log('Não há dados de marcas no MongoDB para sincronizar.');
        }

        const produtosMongo = await ProdutoMongoModel.find({}).lean();
        
        if (produtosMongo.length > 0) {
            const produtosMysql = produtosMongo.map(produto => ({
                mongo_id: produto._id.toString(), 
                nome: produto.nome,
                preco: produto.preco,  
                estoque: produto.estoque,
                marca: produto.marca
            }));
            
            await database('produtos').del(); 
            await database('produtos').insert(produtosMysql);
            
            console.log(` Sincronização concluída: ${produtosMysql.length} registros inseridos na tabela 'produtos'.`);
        } else {
             console.log('Não há dados de produtos no MongoDB para sincronizar.');
        }

        const pedidosMongo = await PedidoMongoModel.find({}).lean();
        
        if (pedidosMongo.length > 0) {
            
            const pedidosMysql = pedidosMongo.map(pedido => ({
                mongo_id: pedido._id.toString(), 
                data_pedido: pedido.data_pedido,
                id_cliente: pedido.id_cliente,
                valor_total: pedido.valor_total
            }));
            
            await database('pedidos').del(); 
            await database('pedidos').insert(pedidosMysql);
            
            console.log(` Sincronização concluída: ${pedidosMysql.length} registros inseridos na tabela 'pedidos'.`);
        } else {
             console.log('Não há dados de pedidos no MongoDB para sincronizar.');
        }
        
    } catch (error) {
       
        console.error(' Erro durante a sincronização:', error);
    }
}