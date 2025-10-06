import { confirmarEliminarProducto } from "./notification.js";

import { mostrarCardsProducto } from "./productos.js";

//Document content load hace que el archivo este a la escucha de un evento, ya que este es nuestro JS principal
//Ejecutar cualquier cosa de Javascript despues de que el DOM este cargado
document.addEventListener("DOMContentLoaded", function() {
    mostrarCardsProducto();
});

