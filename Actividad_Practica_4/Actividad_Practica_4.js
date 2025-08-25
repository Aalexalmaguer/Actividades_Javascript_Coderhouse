// Incorporar Arrays

// Arrays: son listas ordenadas de elementos que pueden ser de cualquier tipo de dato, incluyendo números, cadenas, objetos e incluso otros arrays. Se utilizan para almacenar múltiples valores en una sola variable y permiten acceder a ellos mediante un índice numérico.

let wishlistPS5 = ["Lego Batman", "Battlefield 6", "Ready of Not"];
console.log("Mi lista de deseos para PS5 es: " + wishlistPS5);

//Acceder al primer elemento del array
console.log("El primer juego de la lista es: " + wishlistPS5[0]);

// Push: Agrega un elemento al final del array
wishlistPS5.push("GTA VI");
console.log("Mi lista de deseos actualizada para PS5 es: " + wishlistPS5);

// Pop: Elimina el ultimo elemento del array
wishlistPS5.pop();
console.log("Mi lista de deseos despues de eliminar el ultimo juego es: " + wishlistPS5);

//Shift: Elimina el primer elemento del array
wishlistPS5.shift();
console.log("Mi lista de deseos despues de eliminar el primer juego es: " + wishlistPS5);

//Unshift: Agrega un elemento al inicio del array
wishlistPS5.unshift("GTA VI");
console.log("Mi lista de deseos despues de agregar un juego al inicio es: " + wishlistPS5);

//Length: Devuelve la cantidad de elementos en el array
console.log("La cantidad de juegos en mi lista de deseos es: " + wishlistPS5.length);

//Sort: Ordena los elementos del array en orden alfabetico
wishlistPS5.sort();
console.log("Mi lista de deseos ordenada alfabeticamente es: " + wishlistPS5);

//Reverse: Invierte el orden de los elementos en el array
wishlistPS5.reverse();
console.log("Mi lista de deseos en orden inverso es: " + wishlistPS5);

//Join: Convierte los elementos del array en una cadena de texto, separandolos por el caracter especificado
let wishlistString = wishlistPS5.join(", ");
console.log("Mi lista de deseos en formato de cadena es: " + wishlistString);


// Objeto Literal: Un objeto literal es una colección de propiedades y valores relacionados que se agrupan en una sola entidad. Se define utilizando llaves {} y cada propiedad se compone de un nombre y un valor separados por dos puntos (:). Los objetos literales son útiles para representar entidades del mundo real y organizar datos de manera estructurada.
let videojuego = {
    titulo: "Lego Batman",
    genero: "Aventura",
    plataforma: "PS5",
    anoLanzamiento: 2026,
    calificacion: 9.5,
};
console.log("El videojuego es: " + videojuego.titulo + ", de genero: " + videojuego.genero + ", para la plataforma: " + videojuego.plataforma + ", lanzado en el año: " + videojuego.anoLanzamiento + ", con una calificacion de: " + videojuego.calificacion);