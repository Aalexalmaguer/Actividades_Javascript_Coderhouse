

class Task {
    constructor(id, descripcion, vencimiento, estado) {
        this.id = id;
        this.descripcion = descripcion;
        this.vencimiento = vencimiento;
        this.estado = estado; // "pendiente" o "completada"
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

// Método para agregar una tarea
    addTask(newTask) {
        this.tasks.push(newTask);
    }
}

//Otros métodos a implementar:
// Metodo para eliminar una tarea deleteTask(){}
// Metodo para editar una tarea por id editTask(id){}
// Metodo para mostrar tareas showTasks(){}


// Generación de lista de tareas
const myTaskList = new TaskList();

// Creamos una tarea de ejemplo
const task1 = new Task(1, "Comprar leche", "2025-09-11", "pendiente");

// Usamos addTask para agregar la tarea a la lista
myTaskList.addTask(task1);
console.log(myTaskList);

