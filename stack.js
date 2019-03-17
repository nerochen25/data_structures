/////////////Stack///////////////
class Stack {
    constructor(val) {
        this.stack = new Array(val);
    }

    push(newStack){
        this.stack.push(newStack)
    }

    pop() {
        let length = this.stack.length;
        let lastEl = this.stack[length-1];
        this.stack = this.stack.slice(0, length - 1)
        return lastEl;
    }

    isEmpty() {
        if (this.stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    top() {
        let length = this.stack.length
        return this.stack[length-1]
    }
}

var stack = new Stack({
    name: 'Nero'
})

stack.push({name: 'Nico'});

stack.push({name: 'Dante'});

stack.push({name: 'Vergil'});

// console.log(stack);

// console.log(stack.pop());

// console.log(stack);

// console.log(stack.isEmpty())

// console.log(stack.top())

// Evaluate postfix expression using a stack

// Sort values in a stack

// Check balanced parentheses in an expression
