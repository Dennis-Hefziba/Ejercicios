//Linked list
//double linked list
//stack
//queue
//hashTable
//binary tree
//graphs

function Lista() {
    this.head = null;
}

function Nodo(value) {
    this.value = value;
    this.next = null;
}

Lista.prototype.add = function(value) {
    if (this.head === null) {
        this.head = new Nodo(value);
        return this.head;
    } else {
        let refe = this.head;
        while (refe.next !== null) {
            refe = refe.next;
        }

        refe.next = new Nodo(value);
        return refe.next;
    }
}

Lista.prototype.imprimir = function() {
    let current = this.head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

let list = new Lista();
list.add(34);
list.add(56);
list.add([2, 3, 4]);
list.add(12);

list.imprimir();







