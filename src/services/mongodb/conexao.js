import "dotenv/config";
import mongoose from "mongoose";
import { colecoesParaCriar } from "./seed-colecoes.js";
import { droparColecao } from "./dropar-colecao.js";
import { colecoesInserts } from "./colecoes-inserts.js";

export const conexaoMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DATABASE);
    console.log("Conectou-se ao MongoDB");

    //await colecoesParaCriar();
    await colecoesInserts();
    // await droparColecao();
  } catch (error) {
    console.error("Erro ao conectar no MongoDB", error);
  }
};
