const persona1 = {
    nombre: "Juan",
    edad: 45,
    ciudad: "Cordoba"
};

// Guardar el objeto en localStorage
// Stringify convierte el objeto en una cadena JSON
localStorage.setItem("persona", JSON.stringify(persona1));

//Recuperar el objeto del localStorage
// Parse convierte la cadena JSON en un objeto
const personaEnStorage = JSON.parse(localStorage.getItem("persona"));
console.log(personaEnStorage);