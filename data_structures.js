/////////////// Commonly asked Array interview questions//////////////
// Find the second minimum element of an array
const secondMin = arr => {
    let min = Math.min(...arr);
    let newArr = arr.map(el => el !== min);
    
    return Math.min(...newArr);
}

console.log(secondMin([1,2,2,0,0]));

// First non-repeating integers in an array
// Merge two sorted arrays
// Rearrange positive and negative values in an array