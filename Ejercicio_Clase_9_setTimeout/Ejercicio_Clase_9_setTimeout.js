
//setTimeout es una función que permite ejecutar una función o un bloque de código después de un período de tiempo especificado.
// El setTimeout es una función que permite ejecutar una función o un bloque de código después de un período de tiempo especificado.

console.log("Inicio")

setTimeout(() => {
    console.log("Proceso...");
}, 0);

console.log("Fin")


// Una promesa o promise en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
// Una promesa puede estar en uno de los siguientes estados:
// Pendiente (pending): Estado inicial, ni cumplida ni rechazada.
// Cumplida (fulfilled): La operación se completó con éxito.
// Rechazada (rejected): La operación falló.

const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado pendiente");

    //Simularemos el retraso de una operación asincrónica con setTimeout
    setTimeout(() => {
        //Simularemos el cumplimiento o rechazo de la promesa
        const exito = true;

        if(exito){
            resolve("La promesa se cumplió con éxito");
        }
        else{
            reject("La promesa fue rechazada");
        }
    }, 3000);
});

miPromesa
    .then((resultado)=>{
        console.log("ESTADO: Cumplida");
        console.log("Resultado:", resultado);
})

    .catch((error)=>{
    console.log("ESTADO: Rechazada");
    console.log("Error:", error);
});