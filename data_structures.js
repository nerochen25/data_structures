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

console.log(firstNonRepeatNum([2,3,4,4,2,3,1,1,0]));
// Merge two sorted arrays
// Rearrange positive and negative values in an array