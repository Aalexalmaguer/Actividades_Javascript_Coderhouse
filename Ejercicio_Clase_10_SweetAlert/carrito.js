// Tendremos todas las funciones relacionadas con el carrito de compras

import { 
    confirmarAgregarProducto, 
    confirmarEliminarProducto,
    mostrarToastExito, 
} from "./notification.js";


/* Funcion que maneja el agregado al carrito, primero pide confirmacion y si se confirma agrega el producto */
export async function manejarAgregarAlCarrito(id, title, precio) {
    const resultado = await confirmarAgregarProducto(title);

        if (resultado.isConfirmed) {
            agregarProductoAlCarrito(title, precio);
            mostrarToastExito(`"${title}" ha sido agregado al carrito.`);
    } //Dentro de esta funcion ejecutaremos la funcion de agregarProductoAlCarrito y la de confirmacion
}

/*Funcion que agrega el producto al carrito */
function agregarProductoAlCarrito(title, precio) { //La información que buscaremos mostrar en agregar
    const divCarrito = document.getElementById("carrito") //Accedemos al div carrito
    const itemCarrito = document.createElement("div") //Creamos un div que sera el item del carrito

    itemCarrito.innerHTML = `
        <span class="item-info"><strong>${title}</strong> - $${precio}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;//Agregamos el contenido HTML al item del carrito donde se muestra el titulo y el precio del producto, ademas de un boton para eliminar


/*Funcion que maneja la eliminacion del producto del carrito */
    const botonEliminar = itemCarrito.querySelector(".btn-eliminar"); // Nos traemos un elemento HTML dentro del item del carrito
    botonEliminar.addEventListener("click", function() { //Agregamos un evento al boton eliminar
        manejarEliminarDelCarrito(itemCarrito, title);
    });
    
        divCarrito.appendChild(itemCarrito); //Agregamos el item del carrito al div carrito
} // Esta funcion sirve para agregar productos al carrito


async function manejarEliminarDelCarrito(itemCarrito, title) {
    // Cuando un usuario quiera eliminar un producto del carrito, primero mostramos la notificación de confirmación
    const resultado = await confirmarEliminarProducto(title);

    if (resultado.isConfirmed) {
        itemCarrito.remove(); // Si el usuario confirma, eliminamos el producto del carrito
        mostrarToastExito(`"${title}" ha sido eliminado del carrito.`);
    }
} // Esta funcion sirve para eliminar elementos del carrito
