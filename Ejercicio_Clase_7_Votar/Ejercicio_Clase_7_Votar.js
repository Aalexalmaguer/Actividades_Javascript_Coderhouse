// Funciones individuales
function puedeVotar(edad) {
    return edad >= 18;
}

function puedeBeber(edad) {
    return edad >= 21;
}

// Funcion de orden superior
function verificarEdad(edad, condicion) { //Retornaria el resultado dependiendo de la edad que le pasemos
    return condicion(edad);
}

console.log(verificarEdad(20, puedeVotar)); //true