//Async /Await es una forma de manejar operaciones asincrónicas en JavaScript de manera más sencilla y legible.
// Permite escribir código asíncrono que se parece al código síncrono, utilizando las palabras clave async y await.

function prepararCafe() { //Es un proceso asincrono. No se si se cumplira o no / Retorna una promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //Simularemos el cumplimiento o rechazo de la promesa
            const exito = Math.random() > 0.5; //50% de probabilidad de exito o fracaso. Lo dejamos al azar.

            if(exito){
                resolve("La promesa se cumplió con éxito");
            }
            else{
                reject("La promesa fue rechazada");
            }
        }, 3000);
    });
}

//Ejecutaremos el proceso asincrono con async/await. Nos permite tratar la promesa como si fuera un proceso sincrono.

async function obtenerCafe() { //La palabra async indica que la función es asincrona y retornara una promesa
    try {//El try catch permite obtener el resultado o el error de la promesa
        const cafe = await prepararCafe(); //La palabra await indica que la ejecución de la función debe esperar a que la promesa se resuelva
        console.log(`Tu cafe esta listo ${cafe}`); // Si la promesa se cumple, se ejecuta este bloque de código
    } catch (error) {// Capta si en el try hubo un error y ejecuta un bloque de código alternativo
        console.log(`No se pudo preparar el cafe: ${error}`); // Si la promesa es rechazada, se ejecuta este bloque de código
    }
}

obtenerCafe(); // Llamamos a la función para iniciar el proceso de obtener el café

//Al usar async/await, el código es más fácil de leer y entender, ya que se parece al código síncrono, pero sigue siendo asíncrono.
// Esto facilita el manejo de operaciones que pueden tardar en completarse, como solicitudes a servidores o temporizadores.