//Creamos como una caja de herramientas con funciones reutilizables
//Funciones que realizan operaciones matematicas
// Sirve para sumar
function sumar (a, b) {
    return a + b;
}

// Sirve para multiplicar
function multiplicar (a, b) {
    return a * b;
}

// Sirve para dividir
function dividir (a, b) {
    return a / b;
}

// Funciones de order superior que reciben otra funcion como parametro, 
// en este caso recibira funciones de operaciones matematicas
function calcular (a,b,operacion) { //Cuando ejecute calcular, operacion sera una funcion concreta
    return operacion(a,b);
}

console.log(calcular (8,10,sumar)); //18
const resultado = calcular (9,20,multiplicar); //180
console.log(resultado);