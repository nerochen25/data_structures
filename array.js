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


// find_missing_number
// Assume an array of non-negative integers. 
// A second array is formed by shuffling the elements of the first array and deleting a random element. 
// Given these two arrays, find which element is missing in the second array. Do this in linear time with constant memory use.

const missingNumber = (arr1, arr2) => {
    let longerArr,
        shorterArr;

    if (arr1.length > arr2.length) {
        longerArr = arr1;
        shorterArr = arr2;
    } else {
        longerArr = arr2;
        shorterArr = arr1;
    }

    for (let i = 0; i < shorterArr.length; i++) {

       if (longerArr.includes(shorterArr[i])) {
        let index = longerArr.indexOf(shorterArr[i]);
        longerArr.splice(index, 1);
        // console.log(longerArr)
       }
    }
    return longerArr;
}

// console.log(missingNumber([8,3,5,1], [1,5,3]))


// my_min
// Given a list of integers find the smallest number in the list.
// Phase I
// First, write a function that compares each element to every other element of the list. 
// Return the element if all other elements in the array are larger.

const my_min = (arr) => {
    return Math.min(...arr)
}

// console.log(my_min([ 0, 3, 5, 4, -5, 10, 1, 90 ]))

const my_min2 = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return min;
}

// console.log(my_min2([ 0, 3, 5, 4, -5, 10, 1, 90 ]))

// Largest Contiguous Sub-sum
// You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. 
// Find the sums of all contiguous sub-arrays and return the max.
const sumHelper = (arr) => {
    return arr.reduce(function(acc, num) {
        return acc + num
    })
}

const subSum = (arr) => {

}
