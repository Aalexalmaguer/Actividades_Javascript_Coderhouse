// Fetch es una API de JavaScript que permite realizar solicitudes HTTP asincrónicas a servidores web.
// Proporciona una forma sencilla y moderna de obtener recursos, como datos JSON, imágenes o archivos, desde una URL específica.
// La función fetch devuelve una promesa que se resuelve con la respuesta de la solicitud HTTP.

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json()) // Convierte la respuesta en formato JSON
    .then(data => {
        console.log(data); // Maneja los datos obtenidos
    })
    .catch(error => {
        console.error("Ocurrio un error", error); // Maneja errores
    })

// Async/Await es una sintaxis más moderna y legible para trabajar con promesas en JavaScript.
// Permite escribir código asíncrono de manera similar al código síncrono, utilizando las palabras clave async y await.

async function fetchData() {

    const response = await fetch(url); // Espera a que la promesa se resuelva
    const data = await response.json(); // Espera a que la conversión a JSON se complete
    console.log(data); // Maneja los datos obtenidos
}
fetchData()

