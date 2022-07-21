//1 ----> 2 ----> 3 ----> 4 ----> null

//Arbol de como se ve
// let singleLinkedList = {
//     head: {
//         title: Ejemplo 1,
//         id: 1
//         next: {
//             title: Ejemplo 2,
//             id: 2
//             next: {
//                 title: Ejemplo 3,
//                 id: 3
//                 next:{
//                     title: Ejemplo 4,
//                     id: 4
//                     next: {
//                      titile: emplo 5
//                       id: 5
//                        next: null
//                 }
//             }
//         }
//     }

class node {

  constructor(id, title, valor, updateAt) {
    this.id = id;
    this.title = title;
    this.valor = valor;
    this.updateAt = updateAt;
    this.next = null;
  }
}
class SingleLinkedList {
  constructor(id, title, valor, updateAt) {
    this.head = {
      id: id,
      title: title,
      valor: valor,
      updateAt: updateAt,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //Agregar por la cola
  apend(id, title, valor, updateAt) {
    const newNode = new node(id, title, valor, updateAt);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      console.log("El nodo no existe");
    }
    const firstPointer = this.getTheIndex(index - 1);
    firstPointer.next = this.getTheIndex(index + 1);
    this.length--;
    return this;
  }
}

export default SingleLinkedList;
