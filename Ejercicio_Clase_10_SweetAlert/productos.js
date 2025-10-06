// En este archivo tendremos todo lo relacionado con el consumo de la API

//Para tratar la promesa usamos async/await
async function obtenerListaProductos() {
    // Con el fetch reemplazamos la necesidad de hacer una promesa de manera manual
    const response = await fetch("https://fakestoreapi.com/products?limit=3"); // Hacemos una solicitud a la API de Pokémon para obtener una lista de 6 Pokémon
    //Necesitamos convertir la respuesta a JSON
    //El await hace que la ejecución espere hasta que la promesa se resuelva
    const data = await response.json();
    return data; // Se elimina el result ya que no se encuentra en la API 
}

export async function mostrarCardsProducto(){ //Va a estar a la espera de que se resuelva la promesa
    try {//La resolucion se da dentro del try.
        const productList = await obtenerListaProductos(); //Esperamos a que se resuelva la promesa y obtenemos la lista de Pokémon
        productList.forEach((producto) => {//Por cada pokemon pintaremos un objeto en pantalla. O mejor dicho una tarjeta.
            crearTarjetaProducto(producto)//Diferencia entre parametro y argumento. El parametro es el que recibe la funcion, el argumento es el que se envia a la funcion.
        });
    } catch (error) {
        console.log(error);
    }
    
}

function crearTarjetaProducto(producto) { //En la funcion primero debemos acceder al DIV que se identifica con el id de output
    const div = document.getElementById("output");//Con esto accedemos al div del HTML
    const tarjeta = document.createElement("div"); //Creamos un div que sera la tarjeta

    //Usamos innerHTML para insertar contenido HTML dentro del div tarjeta
    // Este innerHTML muestra la imagen del producto, el titulo del producto y el precio del producto. Además se agrega un botón con la clase btn-comprar
    tarjeta.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}" class="product-image">
        <h4>${producto.title}</h4>
        <p class="product-price">$${producto.price}</p>
        <button class="btn-comprar">Agregar</button> 
    `;
    //Usamos el metodo appendChild para agregar la tarjeta al div output
    div.appendChild(tarjeta);
}
