// Insertando HTML desde Javascript
const contenedor1 = document.getElementById("contenedor1");

// Interpolando variables
const = saludo = "Hola a todos";

contenedor1.innerHTML = `<p>Hola queridos alumnos </p>`;

console.log(contenedor1)

// Selector de clase

document.getElementsByClassName("contenedor2")

// QuerySelector
// Query selector sirve para seleccionar por id o por clase, la diferencia es que si es por id se usa # y si es por clase se usa .

const contenedor3 = document.querySelector(".contenedor3");
console.log(contenedor3);

//QuerySelectorAll
//QuerySelectorAll devuelve un array con todos los elementos que coinciden con el selector

const contenedor4 = document.querySelectorAll(".contenedor4");
console.log(contenedor4);



//Crear un elemento HTML
const contenedorDiv = document.getElementById("contenedorDiv");
// Crear un elemento HTML e Insertarlo en el DOM
const div = document.createElement("div");
// Asignar contenido al div
div.textContent = "DOM y eventos";
// Incrustrar el div en el contenedordiv
contenedorDiv.appendChild(div);


// Eventos
// Quiero que el div este al escucha de un evento
div.addEventListener("click", () => {
    alert("Hiciste click en el contenedor");
});

