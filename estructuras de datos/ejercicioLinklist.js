/*
Aquí tienes un ejercicio simple para implementar una lista
 enlazada en JavaScript:

Supongamos que deseas crear una lista enlazada que represente una lista de tareas pendientes. Cada tarea tendrá un nombre y un estado que indicará si está completada o no.

Define una clase Tarea que tenga propiedades nombre y completada.

Define una clase ListaTareas que tenga un método para agregar una nueva tarea a la lista.

Agrega un método para marcar una tarea como completada.

Agrega un método para imprimir todas las tareas pendientes.
*/

class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
        this.siguiente = null;
    }

    marcarCompletada() {
        this.completada = true;
    }
}

class ListaTareas {
    constructor() {
        this.head = null;
    }

    agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        if (this.head === null) {
            this.head = nuevaTarea;
        } else {
            let current = this.head;
            while (current.siguiente !== null) {
                current = current.siguiente;
            }
            current.siguiente = nuevaTarea;
        }
    }

    marcarTareaCompletada(nombre) {
        let current = this.head;
        while (current !== null) {
            if (current.nombre === nombre) {
                current.marcarCompletada();
                break;
            }
            current = current.siguiente;
        }
    }

    imprimirTareasPendientes() {
        let current = this.head;
        while (current !== null) {
            if (!current.completada) {
                console.log(current.nombre);
            }
            current = current.siguiente;
        }
    }

    imprimirTareasCompletadas() {
        let current = this.head;
        while(current !== null) {
            if (current.completada) {
                console.log(current.nombre);
            }

            current = current.siguiente;
        }
    }
}

// Ejemplo de uso
const listaTareas = new ListaTareas();
listaTareas.agregarTarea('Hacer la compra')
listaTareas.agregarTarea('vender carne')
listaTareas.agregarTarea('pisar')
listaTareas.agregarTarea('chupar cuca')
listaTareas.marcarTareaCompletada('Hacer la compra')
listaTareas.marcarTareaCompletada('vender carne')
listaTareas.imprimirTareasPendientes()

// listaTareas.agregarTarea('Estudiar para el examen');
// listaTareas.agregarTarea('Preparar la cena');

// listaTareas.marcarTareaCompletada('Estudiar para el examen');

// console.log("Tareas Pendientes:");
// listaTareas.imprimirTareasPendientes();
