//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE=SERVIDOR DE SPOTIFY
let uri="http://localhost:8081/casahogar/miercoles/v1/productos";


let parametrosEnvio={
    method:"GET",
}

//promesa
fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")

    console.log(datos)

        datos.forEach(function(producto){
        console.log(producto.producto)
        console.log(producto.fotografia)
        console.log(producto.precio)
        console.log(producto.descripcion)
        console.log(producto.tipo)
        

        //crear un div con js
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo un div que sirve de tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
        tarjeta.classList.add("p-3")

        //creo una img de tarjeta
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.src=producto.fotografia

        //agrego nombre
        let descripcion=document.createElement("h3")
        descripcion.classList.add("fw-bold")
        descripcion.classList.add("mt-2")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.producto

         //agrego precio
         let precio=document.createElement("p")
         precio.classList.add("fw-bold")
         precio.classList.add("mt-3")
         precio.classList.add("text-center")
         precio.textContent=producto.precio

          //agrego descripcion
          let texto=document.createElement("p")
          texto.classList.add("text-center")
          texto.textContent=producto.descripcion

        //PADRES E HIJOS
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(texto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        

    })

} 
