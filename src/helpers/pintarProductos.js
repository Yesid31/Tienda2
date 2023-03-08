export function pintarProductos(productos){

    productos.forEach(function(producto){
        //creando columnas para alojar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        // Crear una Tarjeta para almacenar info del producto
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen 
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
        // Crear Un Titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
        // Crear La Descripcion
        let descripcion=document.createElement("h6")
        descripcion.classList.add("content-right","d-none")
        descripcion.textContent=producto.descripcion
        // Crear Precio 
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-blod")
        precio.textContent="USD "+producto.precio
    
        // Detectando evento
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
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
}