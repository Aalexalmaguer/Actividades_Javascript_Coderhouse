// Crear un algoritmo que use funciones

// Funcion: Una funcion es un bloque de codigo que se puede reutilizar. Se define con la palabra reservada "function" seguida del nombre de la funcion y parentesis.

function calcularPromedio(calificacionEspanol, calificacionMatematicas, calificacionQuimica, calificacionEducacionFisica) {
    const promedioFinal = (calificacionEspanol + calificacionMatematicas + calificacionQuimica + calificacionEducacionFisica) / 4;
    if (promedioFinal >= 70) {
    return "Felicidades, has aprobado el curso con un promedio de " + promedioFinal;
    } else {
    return "Lo siento, no has aprobado el curso. Tu promedio fue de " + promedioFinal + " .Intenta de nuevo el proximo año";
    }
}

// Ejecución: pasar valores y mostrar el resultado

console.log(calcularPromedio(80, 50, 100, 70));
