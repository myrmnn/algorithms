// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//join() returns a new string from an array or an array like object, separated by commas if not given parameters or a specified separator string. 

//The reverse method reverses an array in place. The first array element becomes the last and the last array element becomes the first. Mutates the array and returns a reference to the array.

//Array.from() creates a new shallow-copied Array instance from an array-like or iterable object. (Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created...Array.from([1, 2, 3], x => x + x))

//reduce() executes a reducer function that you provide on each element of the array, resulting in a single output value.
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// expected output: 10

function reverse(str) {
return Array.from(str)
.reverse()
.join('');
}

function reverse2(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    return reversed;
}

function reverse3(str){
   return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
