import{productos} from '../helpers/baseDatos.js'
import { pintarProductos } from '../helpers/pintarProductos.js'

//llamando a la fila
let fila=document.getElementById("fila")

//Pintar los productos de la tienda
pintarProductos(productos)

//Escuchando click en la fila contenedora de productos 

fila.addEventListener("click",function(evento){
    
    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement 

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent
 

    //usaremos la memoria del pc para guardar esta info 

    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))


    window.location.href="./src/views/ampliarinfo.html"
   
   


})



