    // npm install sweetalert2
// import Swal from 'sweetalert2'

//export function confirmarEliminarProducto(nombreProducto) {
//    return swal.fire({
//        title: "Eliminar del Carrito",
//        text: `¿Deseas eliminar "${nombreProducto}" del carrito de compras?`,
//        icon: "warning",
//        showcancelButton: true,
//        confirmButtonText: "Sí, eliminar",
//        cancelButtonText: "Cancelar",
//    }).then((result) => {
//        if (result.isConfirmed) {
//            console.log("Producto eliminado");
//        } else if (result.isDismissed) {
//            console.log("Acción cancelada");
//        }
//    });
//}

export function confirmarAgregarProducto(nombreProducto) {
    return swal.fire({
        title: "¿Agregar producto al carrito?",
        text: `Deseas agregar "${nombreProducto}" al carrito de compras?`,
        icon: "question",
        showcancelButton: true,
        confirmButtonText: "Sí, agregar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3498db",
        cancelButtonColor: "95a5a6",
    });
}

export function confirmarEliminarProducto(nombreProducto) {
    return swal.fire({
        title: "Eliminar del Carrito",
        text: `¿Deseas eliminar "${nombreProducto}" del carrito de compras?`,
        icon: "warning",
        showcancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#95a5a6",
    });
}

export function mostrarToastExito(nombreProducto) {
    swal.fire({
        toast: true, // Modo toast (noificación pequeña)
        position: top-end, // Posición en la esquina superior derecha
        icon: "success", // Icono de éxito
        title: mensaje,
        showConfirmButton: false, // No mostrar botón de confirmación
        timer: 3000, // Duración en milisegundos
        timerProgressBar: true, // Barra de progreso del temporizador
    });
}

export function mostrarToastError(nombreProducto) {
    swal.fire({
        toast: true, // Modo toast (noificación pequeña)
        position: top-end, // Posición en la esquina superior derecha
        icon: "error", // Icono de éxito
        title: mensaje,
        showConfirmButton: false, // No mostrar botón de confirmación
        timer: 3000, // Duración en milisegundos
        timerProgressBar: true, // Barra de progreso del temporizador
    });
}