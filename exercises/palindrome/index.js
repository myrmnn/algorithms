// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str
}

palindrome('mom');

//this is not an ideal solution, but it does work. It is not ideal because it is comaparing the first half (incrementally) with the second half and then iterating through to comapre the second half with the first. Compaing more than is neccessary to test for a palindrome.

//The every method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callback returns a truthy value for all elements, every returns true.

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//arr.every(callback(element[, index[, array]])[, thisArg])

function palindrome2(str){
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
