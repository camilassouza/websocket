import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://alura:123@aluracluster.ctf5nnn.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao
let usuariosColecao

try  {
    await client.connect();
    const db = client.db("alura-websockets")
    documentosColecao = db.collection("documentos");    
    usuariosColecao = db.collection("usuarios")

} catch (err) {
    console.log('err',err)
}


export {documentosColecao, usuariosColecao}