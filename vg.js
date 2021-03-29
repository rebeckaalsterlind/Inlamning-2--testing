const reverseString = (...str) => str.reverse().join("");

const isPalindrome = str => {
    let reversed = str.split("").reverse().join("");
    return (str == reversed) ? true : false;
} 
   
module.exports = {reverseString, isPalindrome}