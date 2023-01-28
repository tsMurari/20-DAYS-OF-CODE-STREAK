class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      var str = "";
      for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
      return str;
    }
  }
  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Underflow";
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class DoubleEndedQueue extends Queue {
      constructor() {
          super();
      }
      add_at_beg(item) {
          this.items.unshift(item);
      }
      add_at_end(item) {
          this.items.push(item);
      }
      remove_at_beg() {
          if (this.isEmpty()) return "Underflow";
          return this.items.shift();
      }
      remove_at_end() {
          if (this.isEmpty()) return "Underflow";
          return this.items.pop();
      }
  }
  
  const deque = new DoubleEndedQueue();
  deque.add_at_beg(1);
  deque.add_at_beg(2);
  deque.add_at_end(3);
  deque.add_at_end(4);
  console.log(deque.remove_at_beg());
  console.log(deque.remove_at_end());
  console.log(deque.front());
  console.log(deque.items);
  