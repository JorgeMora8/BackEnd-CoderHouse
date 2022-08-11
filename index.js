const express = require("express"); 
const app = express(); 
const Contenedor = require("./Contenedor/Contenedor")
const productos = new Contenedor("./productos.txt")

const port = 3000; 

app.get("/", (req, res) => { 
    res.send("Servidor Activo")
})

app.get("/productoRandom", (req, res) => {
    
    try {
        productos.getRandom()
        .then((data) => res.send(data))
        .catch((error) => console.log(error))   
    } catch (error) {
        throw "Error en la ejecucion del programa"
    }
})

app.get("/productos", (req, res) => { 
    try {
        productos.getAll()
        .then((data) => res.send(data))
        .catch((err) => console.log(err))
    } catch (error) {
        throw "Error en la ejecucion del codigo"
    }
})

const server = app.listen(port, ()=> { 
    console.log("Se esta usando el servidor: " + port)
})

server.on("error", (error) => { 
    console.log("Hubo un error de codigo. " + error)
})