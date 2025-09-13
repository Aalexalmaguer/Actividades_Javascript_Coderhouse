
const miArray = [1, 2, 3, 4, 5, 6, 7,];

for(let index = 0; index<miArray.length; index++){
    const elemento = miArray[index];
    console.log(elemento);
}


// Visual studio code tiene una manera de obtener la plantilla de un for each
// Escribimos "for" y luego presionamos "tab" dos veces

// for each
miArray.forEach((elemento) => console.log(elemento)) //El for Each recibe una funcion de orden inferior 
// como parametro



// Crearemos un for each de manera manual para entenderlo mejor

function porCadaUno(arr, funcionInferior) { // Esta funcion recibe un array y una funcion como parametros
    for (const elemento of arr) { //Generamos un elemento por cada elemento del array. 
    // Por cada elemento del array le aplicaria la funcion inferior
        funcionInferior(elemento); // La funcion inferior se ejecuta por cada elemento del array
    }
}

porCadaUno(miArray, console.log) //Console.log es la funcion de orden inferior que le pasamos como parametro



// El metodo find es una funcion de orden superior que devuelve la referencia del primer elemento que 
// cumpla la condicion

const miArray2 = [1, 2, 3, 4, 5, 6, 7, 10, 16, 19];

const numeroMayorA10 = miArray2.find((elemento) => elemento > 10)
console.log(numeroMayorA10) // 16

// El metodo filter es una funcion de orden superior que devuelve un array con todos los 
// elementos que cumplen la condicion

const numerosMayoresA10 = miArray2.filter((elemento) => elemento > 10) // No incluye el 10 porque 
// no es mayor a 10, es igual a 10
console.log(numerosMayoresA10) // [16, 19]


numerosMayoresA10.forEach((numero) => console.log(numero)) // Podemos usar for each para recorrer el 
// array resultante del filter


// Ejemplo de uso de filter con un array de objetos
const cursos = [
    {nombre: "JavaScript", precio : 40000},
    {nombre: "React", precio : 100000},
    {nombre: "sql", precio : 30000},
    {nombre: "Desarrollo Web", precio : 15000},
]

const cursosBaratos = cursos.filter((curso) => curso.precio < 40000)
console.log(cursosBaratos); // [{nombre: "sql", precio : 30000}, {nombre: "Desarrollo Web", precio : 15000}]

// El metodo map es una funcion de orden superior que devuelve un nuevo array con los resultados
// Para el ejemplo crearemos un array con el nombre de los cursos baratos

const nombreCursosBaratos = cursosBaratos.map((curso) => curso.nombre) // ["sql", "Desarrollo Web"]
console.log(nombreCursosBaratos);

// El metodo some es una funcion de orden superior que devuelve true si al menos un elemento
// del array cumple la condicion

const existesql = cursosBaratos.some((curso) => curso.nombre === "sql") // true

// El metodo reduce es una funcion de orden superior que ejecuta una funcion reductora
// sobre cada elemento del array, devolviendo como resultado un unico valor
// Un acumulador es el valor que se va actualizando en cada iteracion

const miArray3 = [1, 2, 3, 4, 5, 15];

const total = miArray3.reduce((acumulador, elemento) => acumulador + elemento, 0) // 30
// El 0 es el valor inicial del acumulador
// En la primera iteracion el acumulador vale 0 y el elemento vale 1, por lo que el resultado
// de la funcion es 0 + 1 = 1. En la segunda iteracion el acumulador vale 1 y el elemento vale 2,
// por lo que el resultado de la funcion es 1 + 2 = 3. Y asi sucesivamente hasta recorrer todo el array
console.log(total);
