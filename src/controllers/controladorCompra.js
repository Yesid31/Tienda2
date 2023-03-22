//Llamo a la memoria para acceder a los datos guardados:
let infoProducto= JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)
let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora") 
if(infocarrito!=null){
  carrito=infocarrito
  pildora.textContent=carrito.length
}
else{
     carrito=[]
}






let botonAgregarProducto=document.getElementById("btnagregarcarrito")

botonAgregarProducto.addEventListener("click",function(){
   
    carrito.push(infoProducto)
   pildora.textContent=carrito.length
   localStorage.setItem("carrito",JSON.stringify(carrito))
})