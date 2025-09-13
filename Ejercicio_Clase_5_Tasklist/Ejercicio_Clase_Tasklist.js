
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
    //Otros métodos a implementar con las funciones de orden superior de la clase 7
    // Metodo para eliminar una tarea deleteTask(){} find




    // Metodo para editar una tarea por id editTask(id){}
    editTask(id, updateTask){
        const taskToEdit = this.tasks.find( (task)=> task.id === id) // Devuelve la referencia del primer 
        // elemento que cumple la condicion, se busca la tarea con el id pasado por parametro

        //Hacemos una validaciones para ver si la tarea a editar existe
        if(taskToEdit){
            taskToEdit.descripcion = updateTask.descripcion
            taskToEdit.vencimiento = updateTask.vencimiento
            taskToEdit.estado = updateTask.estado
        } else {
        alert("No se encontro la tarea")
        }
        this.saveInLocalStorage(); // Guardamos los cambios en localStorage
    }
}


    // Metodo para mostrar tareas showTasks(){} for each



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


// Editamos una tarea
    myTaskList.editTask(1,{ // Ponemos el id de la tarea a editar y un objeto con los nuevos datos
        descripcion: "Hacer compras",
        vencimiento: "2025-09-16",
        estado: "En proceso"
    })
}

myTaskList.saveInLocalStorage();

