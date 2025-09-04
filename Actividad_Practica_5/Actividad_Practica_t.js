// Clase Producto
class Producto {
    constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.subtotal = this.calcularSubtotal();
}

    calcularSubtotal() {
    return this.precio * this.cantidad;
}
}

// Array para guardar productos
let productos = [];

// Crear productos y agregarlos al array
productos.push(new Producto(1, "Teclado", 399.90, 2));
productos.push(new Producto(2, "Mouse", 249.50, 1));
productos.push(new Producto(3, "Monitor", 3299.00, 1));

// Mostrar productos
productos.forEach(p => {
    console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}, Subtotal: ${p.subtotal}`);
});
