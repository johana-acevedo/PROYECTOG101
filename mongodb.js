import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db= mongoose.connect(process.env.MON_DBURI).then(()=>{
    console.log("la conexion fue realizada con exito en la red")
}).catch((error)=>console.error("problemas al conectar a la Base de datos de Mongodb,error"));


export default db;


