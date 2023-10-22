class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    var node = new Node(element);
    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert element at the position index of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Enter Valid Index");
    } else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        //adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  //Remove an element from specific index
  removeForm(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Enter valid index");
    } else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index == 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
    }
  }

  //remove an element from list
  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current != null) {
      if (current.element == element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  //find the index of the element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    while (current != null) {
      if (current.element == element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  //check the list is empty or not
  isEmpty() {
    return this.size == 0;
  }

  //give the size of the list
  size_of_list() {
    console.log(this.size);
  }

  //Print othe List
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

//driver Code
var li = new LinkedList();

console.log(li.isEmpty());

li.add(10);
li.add(20);
li.add(30);
li.add(40);

li.printList();


// it's return size of list
console.log(li.size_of_list());

li.printList();

console.log("Index Of 40 : " + li.indexOf(40));

li.insertAt(50,2);
li.printList();

console.log(li.removeForm(3));
li.printList();

li.removeElement(10);
li.printList();