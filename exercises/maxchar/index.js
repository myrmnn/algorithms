// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let maxChar = '';
    let max = 0;
    let myString = str.toLowerCase().replace(/ /g,'');

    for(let char of myString){
        if(!charMap[char]){
            charMap[char]  = 1;
        } else {
            charMap[char] ++;
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
        maxChar = char;
        }
    }

return maxChar;
}

module.exports = maxChar;
