
//``
/* 
    class ==> Object

    Instance Propieties: What they have
    -Name
    -Age
    -Height


    Instance Methods: What they do
    -Run
    -Talk
    -Jump


*/

// const librosSeleccionados =[
//     {libro:"nombreLibro", precio:999},
//     {libro:"nombreLibro", precio:999},
//     {libro:"nombreLibro", precio:999},
//     {libro:"nombreLibro", precio:999},
// ]

// let arrayNuevo=[]
// librosSeleccionados.forEach((libro) => { 
//     arrayNuevo.push(libro.libro)
// })
// console.log(arrayNuevo)

////////
class Usuario { 
    constructor(nombre, apellido, mascotas, libros){ 
        this.nombre=nombre; 
        this.apellido=apellido;  
        this.libros=libros
        this.mascotas=mascotas
    }

   


    getFullName(){ 
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }

    // addMastoca(parametro){ 
    //     let nuevoArrayMascotas = [...this.mascotas, parametro]
    //     console.log(`Lista de mascotas: ${nuevoArrayMascotas}`)
    // }

    addMascota(mascota){ 
      const ArrayMascota= [...this.mascotas]
      ArrayMascota.push(mascota)
      console.log(ArrayMascota)
    }

    countMascotas(){ 
        console.log([...this.mascotas].length)
    }

    addBook(nombre, autor){ 
        let agregarLibro = {nombre:nombre, autor:autor}
        let nuevoArrayLibros=[...this.libros, agregarLibro]
        console.log(nuevoArrayLibros)
    }

    bookNames(){ 
        let nombreLibros = []
        let arrayLibros = [...this.libros]; 
        arrayLibros.forEach((libro) =>{ 
        nombreLibros.push(libro.nombre)
        })
        console.log(nombreLibros)
    }
    





}

const Usuario1 = new Usuario("Jorge", 
            "Mora", 
            ["Perro", "Terodactilo", "Dinosaurio"], 
            [
                {nombre:"Padre Rico, Padre Pobre", autor:"Robert Kiyosaki"}, 
                {nombre:"El Alquimista" , autor:"Paulo Coehlo"}, 
                {nombre:"La Ballena Varada" , autor:"Oscar Collazos"}
                
            ])

    

        Usuario1.addMascota("Caballo")
        Usuario1.getFullName()
        Usuario1.countMascotas()
        Usuario1.bookNames()
        Usuario1.addBook("Harry Potter", "Joanne Rowling")


