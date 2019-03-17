/////////Queue//////////

class Queue {
    constructor(val) {
        this.queue = new Array(val)
    }

    enqueue(val) {
        this.queue.push(val)
    }

    dequeue() {
        this.queue = this.queue.slice(1)
    }

    isEmpty() {
        if (this.queue.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    top() {
        return this.quene[0];
    }
}

var queue = new Queue({name: 'Nero'});

queue.enqueue({name: "Dante"})
// console.log(queue);

// queue.dequeue();

// console.log(queue);

// console.log(queue.isEmpty())

// queue.dequeue();

// console.log(queue.isEmpty())

