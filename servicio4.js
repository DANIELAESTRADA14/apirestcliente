let uri="http://localhost:8081/casahogar/miercoles/v1/productos";

//recibir datos del cliente (formulario)
// detectar clicl del boton del formulario

let boton=document.getElementById("boton")

boton.addEventListener("click",capturarDatos)

function capturarDatos(){

    let producto=document.getElementById("nombre").value
    let fotografia=document.getElementById("photo").value
    let precio=document.getElementById("precio").value
    let descripcion=document.getElementById("descripcion").value
    let tipo=document.getElementById("tipo").value

    let dato1="producto="+producto
    let dato2="fotografia="+fotografia
    let dato3="precio="+precio
    let dato4="descripcion="+descripcion
    let dato5="tipo="+tipo

    //console.log(dato1,dato2,dato3,dato4,dato5)
    
    let parametrosPOST={
        method:"POST",
        headers:{
            "Content-Type": 'application/x-www-form-urlencoded' //formato en el que van a viajar los datos
    
        },
        body:dato1+"&"+dato2+"&"+dato3+"&"+dato4+"&"+dato5
    }

        fetch(uri,parametrosPOST)
        .then(function(respuesta){
            return(respuesta.json())
        })
        .then(function(respuesta){
            console.log(respuesta)
            alert("exito agregando el producto")
        })
        .catch(function(respuesta){
            console.log(respuesta)
            
        })


}