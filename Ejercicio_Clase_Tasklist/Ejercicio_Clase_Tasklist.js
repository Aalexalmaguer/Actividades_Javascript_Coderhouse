
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

    // Método para guardar tareas en localStorage
    saveInLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // Método para cargar tareas desde localStorage
    getTaskLocalStorage() {
        const tasksinStorage = localStorage.getItem("tasks");
        
        if (tasksinStorage) {
            this.tasks = JSON.parse(tasksinStorage);
        }
    }
    //Otros métodos a implementar:
    // Metodo para eliminar una tarea deleteTask(){}
    // Metodo para editar una tarea por id editTask(id){}
    // Metodo para mostrar tareas showTasks(){}
}


// Generación de lista de tareas
const myTaskList = new TaskList();
myTaskList.getTaskLocalStorage();

if (myTaskList.tasks.length === 0) {
    // Creamos una tarea de ejemplo
    const task1 = new Task(1, "Comprar leche", "2025-09-11", "pendiente");
    const task2 = new Task(2, "Pasear al perro", "2025-09-11", "pendiente");

    // Usamos addTask para agregar la tarea a la lista
    myTaskList.addTask(task1);
    myTaskList.addTask(task2);

    myTaskList.saveInLocalStorage();

    console.log(myTaskList);
}
