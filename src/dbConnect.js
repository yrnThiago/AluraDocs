import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alura:123@alura.zc8h2bz.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de daos com sucesso!");
} catch (error) {
    console.log(error);
}

export { documentosColecao };
