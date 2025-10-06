import mongoose from "mongoose";
import { connectMongo } from "../mongo-connect.js";

export const manipularUsuarios = async () => {

    const mongo = mongoose.connection;
    const collection = 'usuario';

    const collections = await mongo.db.listCollections().toArray();
    console.log(`Collections:`, collections);
    const collectionExists = collections.some(col => col.name === collection);

    if (collectionExists) return console.log(`Collection '${collection}' already exists.`);

    // const drop = await db.dropCollection(collection)
    // console.log('Drop:', drop)
    await mongoose.connection.close();
}

const iniciarServer = async () => {
    await connectMongo(); // Espera a conexão ser estabelecida
    await manipularUsuarios(); // Depois, executa as operações
    // As operações da API (server.listen, etc.) viriam aqui
};

iniciarServer();