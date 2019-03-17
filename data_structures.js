/////////////// Commonly asked Array interview questions//////////////
// Find the second minimum element of an array
const secondMin = arr => {
    let min = Math.min(...arr),
        newArr = [];

    arr.forEach(el => {
        if (el > min) {
            newArr.push(el)
        }
    })
    
    return Math.min(...newArr);
}

// console.log(secondMin([1,2,2,0,0, -1]));

// First non-repeating integers in an array
//input: [1,2,3,5,1,2]
//output: 1
const firstNonRepeatNum = arr => {
    let counter = {};

    for (let i = 0; i < arr.length; i++) {
        if (counter[arr[i]]) {
            counter[arr[i]] += 1
        } else {
            counter[arr[i]] = 1;
        }
    }

    let nonRepeatNums = Object.keys(counter).filter(el => {
        return counter[el] === 1;
    })
    

    for (let j = 0; j < arr.length; j++) {
        if (nonRepeatNums.includes(arr[j].toString())) {
            return arr[j];
        }
    }
    return false;
}
// console.log(firstNonRepeatNum([2,3,4,4,2,3,1,1,0]));

// Merge two sorted arrays
//input: [1,2,4,6,9], [2,4,7,9,10]
//output: [1,2,2,4,4,6,7,9,9,10]
const mergeSortedArrays = (a, b) => {
    let combineArr = a;

    b.forEach(el => {
        combineArr.push(el);
    })

    return combineArr.sort((i ,j) => {
        return i - j
    })
}

// console.log(mergeSortedArrays([1,2,4,6,9], [2,4,7,9,10]))

// Rearrange positive and negative values in an array




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

