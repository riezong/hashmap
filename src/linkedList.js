import { Node } from "./node";

class LinkedList {
  constructor() {
    this.firstNode = null; // create head upon initialising factory
  }

  append(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. if list is empty (head is null)
    //    new Node becomes head of list
    if (this.firstNode === null) {
      this.firstNode = newNode;
    } else {
      // 3. traverse to last Node
      //    while loop
      //    current pointer starting from firstNode
      let current = this.firstNode;
      while (current.nextNode != null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    // 2. shift old head to nextNode
    newNode.nextNode = this.firstNode;

    // 3. replace head with new Node
    this.firstNode = newNode;
  }

  size() {
    if (this.firstNode === null) return 0;

    let counter = 1;
    // traverse list
    let current = this.firstNode;
    while (current.nextNode != null) {
      counter += 1;
      current = current.nextNode;
    }

    return counter;
  }

  head() {
    // returns the first node in the list
    return this.firstNode;
  }

  tail() {
    // returns the last node in the list
    let current = this.firstNode;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    let lastNode = current;
    return lastNode;
  }

  at(index) {
    if (this.firstNode === null) return console.log("empty list");

    // traverse list
    let current = this.firstNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    if (current === null) return "list isn't long enough";

    return current;
  }

  pop() {
    // 1. get the second last Node
    let size = this.size();
    // console.log(size);
    let target = size - 2;
    // console.log(target);
    // console.log(this.at(target));

    // 2. change that Node.nextNode to null
    this.at(target).nextNode = null;
    // console.log(this.at(target));

    // 3. return new last Node
    return this.tail();
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false.

    // traverse list
    let current = this.firstNode;
    while (current.nextNode != null) {
      console.log(current.value);
      if (current.value == value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let counter = 0;
    // traverse list
    let current = this.firstNode;
    while (current.nextNode != null) {
      counter += 1;
      console.log(current.value);
      if (current.value == value) return counter - 1;
      current = current.nextNode;
    }

    return console.log("doesn't exist in list");
  }

  toString() {
    const listString = [];
    let current = this.firstNode;
    listString.push(current.value); // add first value to array

    // traverse list
    while (current.nextNode != null) {
      listString.push(current.nextNode.value);
      current = current.nextNode;
    }

    listString.push(current.nextNode); // add last value (null) to array
    return listString.map((x) => `( ${x} )`).join(" -> ");
    // return firstNode;
  }

  // Extra credit
  insertAt(value, index) {
    // 1. create new Node
    const newNode = new Node(value); // add a new Node

    let prev = index - 1;
    let next = this.at(index);
    this.at(prev).nextNode = newNode;
    newNode.nextNode = next;

    return newNode;
  }

  removeAt(index) {
    let prev = index - 1;
    let next = index + 1;
    return (this.at(prev).nextNode = this.at(next));
  }
}

export { LinkedList };
