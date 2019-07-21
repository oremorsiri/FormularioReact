const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");

mongoose.connect("mongodb://localhost:27017/Register", {useNewUrlParser:true})
.then(()=>console.log("Conectado a MongoDB"))
.catch(error=>console.log("Error al conectar con MongoDB: " + error))

app.use(function(req, res, next) { // permite peticiones de otros dominios
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH");
    next();
  });

app.use(express.json()) // parsea el body de la petición a JSON

app.use("/users", userRouter);

app.listen(3001,()=>console.log("Servidor levantado en 3001"));