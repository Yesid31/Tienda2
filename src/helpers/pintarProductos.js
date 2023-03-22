export const formateador = new Intl.NumberFormat('en-US', {
    
})

export function pintarProductos(productos){
    
    productos.forEach(function(producto){

        //creando columnas para alojar los productos
   
        let columna=document.createElement("div")
        columna.classList.add("col")
   
        //voy a crear una tarjeta oara almacenar la info del producto
   
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
   
        //crear una imagen
   
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
   
        //Crear un titulo
   
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre

        //crear la descripcion

        let descripcion=document.createElement("p")
        descripcion.classList.add("content-right","d-none")
        descripcion.textContent=producto.descripcion
   
        //crear un precio
   
        //let precio=document.createElement("h5")
        //precio.classList.add("text-center","text-success","fw-bold")
        //precio.textContent="COP"+producto.precio

        // crear un precio
        let precioDisplay = document.createElement("h5")
        precioDisplay.classList.add("text-center", "text-rojo", "fw-bold", "mb-3")
        precioDisplay.textContent = (producto.precio)
        
    
        let precioOculto = document.createElement("h1")
        precioOculto.classList.add("d-none")
        precioOculto.textContent = producto.precio

        //Detectando evento

        tarjeta.addEventListener("mouseover",function(){
            
            imagen.src=producto.fotos[1]

        })

        tarjeta.addEventListener("mouseleave",function(){
            
            imagen.src=producto.fotos[0]

        })
   
        //padres e hijos
   
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precioDisplay)
        tarjeta.appendChild(precioOculto)
        //tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
   
   })
}