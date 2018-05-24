// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

//jshint esversion: 6
function sumAll(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return (max - min + 1) * (max + min) / 2;
}

sumAll([1, 4]);
