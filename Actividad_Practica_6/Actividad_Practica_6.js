// Creamos una lista con objetos de compra con nombre y precio
const items = [
    {
        nombre: "cafe",
        precio: 10
    },
    {
        nombre: "te",
        precio: 5
    },
    {
        nombre: "chocolate",
        precio: 15
    },
    {
        nombre: "agua",
        precio: 3
    }
]

//Utilizaremos el metodo find de array para buscar si se encuentra el producto "cafe" en nuestro array
// El metodo find devuelve la referencia del primer elemento que cumpla la condicion, mientras que filter devuelve un array con todos los elementos que cumplen la condicion.

const buscarCafe = items.find(items => items.nombre === "cafe");
console.log(buscarCafe)

// Filtraremos los productos siguiendo un criterio por ejemplo que el nombre de un producto contenga una palabra o parte de ella. También podemos filtrar por precio, cantidad, etc.
// El metodo filter devuelve un array con todos los elementos que cumplen la condicion.

const mayorA5 =items.filter (items => items.precio > 5); // No incluye te porque no es mayor a 5, es igual a 5
console.log(mayorA5)

// Utilizaremos el método map para actualizar el precio en un 16% agregando el IVA u otro valor de aumento que desee aplicar sobre cada uno de los productos obteniendo un nuevo array de productos actualizado.
// El metodo map devuelve un nuevo array con los resultados de la funcion aplicada a cada elemento del array original.

const precioConIVA = items.map (items => {
    return {
        precio: items.precio * 1.16,
    }
})

console.log(precioConIVA)
