// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let num = n.toString().split('').reverse().join('');

    return parseInt(num) * Math.sign(n);
}

reverseInt(51);


module.exports = reverseInt;

//parseInt() parses a string argument and returns an integer of the specified radix (the radix or base is the number of unique digits, including the digit zero, used to represent numbers)

// Math.sign(x) returns eith a positive or negative +/- 1, indicating the sign of the number passed into the argument. -5, -10, -1 will all return -1. 5, 10, 1 will all return 1.

//toString(str) returns a string