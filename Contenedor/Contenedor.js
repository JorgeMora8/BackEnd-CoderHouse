const { error } = require("console");
const {promises:fs} = require("fs"); 
class Contenedor { 
    constructor(ruta){ 
        this.ruta=ruta; 
    }

    static idObjeto=0

    async save(objeto){ 
        let objetosGuardados = await this.getAll();

        if(objetosGuardados.length===0){ 
            Contenedor.idObjeto=1
        } else{ 
            Contenedor.idObjeto++
        }

        objeto={id:Contenedor.idObjeto, ...objeto}

        let infoAguardar = [...objetosGuardados, objeto];
        try {
            await fs.writeFile(this.ruta, JSON.stringify(infoAguardar, null, 2))
        } catch (error) {
            throw new error
        }    
    }

    async getById(id){ 
        let objetosGuardados = await this.getAll();

        let objetoSeleccionado = objetosGuardados.filter(producto => producto.id === id); 

        if(objetoSeleccionado.length===0){ 
            return "No se consigue este ID"
        }
    }

    async getAll(){ 
        try {
            const objetos = await fs.readFile(this.ruta, "utf-8");
            return JSON.parse(objetos)   
        } catch (error) {
            return []
        }
    }

    async deleteById(id){
        let objetosGuardados = await this.getAll();
        let objetoSeleccionado = objetosGuardados.filter(o=>o.id!=id)
        try {
            await fs.writeFile(this.ruta,JSON.stringify(objetoSeleccionado,null,2))
        } catch (error) {
            return `No se puede borrar ese registro`
        }
        
    }

    async deleteAll(){ 
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            return "No se pudieron eliminar los datos."
        }
    }

    async modificarDatos(objeto){
        let objetosGuardados = await this.getAll();
        let index = objetosGuardados.findIndex(obj =>o.id==obj.id);
        objs[index]=objeto;
        try {
            await fs.writeFile(this.ruta,JSON.stringify(objs,null,2))
        } catch (error) {
            `No se puede modificar los datos`
        }
    }


    async getRandom(){ 
        let idRandom = Math.floor(Math.random()*4)
        let objetosGuardados = await this.getAll();
        let enviarProductoRandom = objetosGuardados.find((producto) => producto.id === idRandom)
        
        return enviarProductoRandom
    }
}

// const productos = new Contenedor("./Productos.json")

// productos.save({nombre:"Samsung Galaxy s22", precio:285, estado:"Usado"}); 

// productos.getAll()
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

// productos.deleteById(1)
// .then((data) => console.log(data))
// .catch((error) => console.log(error))


// productos.save({nombre:"Samsung s21 Pro",precio:420, estado:"Nuevo"})

module.exports=Contenedor