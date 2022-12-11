const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const porta = process.env.PORTA;
const enderecoBanco = process.env.URL_BANCO;
const app = express();
app.use(express.json());

mongoose.connect(enderecoBanco);

mongoose.connection.on("connected", function(){
    console.log("[AVISO]: Aplicação conectada ao banco de dados")
});

mongoose.connection.on("disconnected", function(){
    console.log("[AVISO]: Aplicação desconectada do banco de dados")
});

mongoose.connection.on("error", function(erro){
    console.log("[ERRO]: Erro ao conectar ao banco de dados")
    console.log(erro)
});


const teamRoutes = require("./routes/Team");

app.use("/team", teamRoutes);

app.listen(porta, function(){
    console.log("api funcionando" + porta)
})

