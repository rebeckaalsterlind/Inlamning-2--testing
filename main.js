const add = (a, b) => a+b; 

const sub = (a, b) => a-b; 

const div = (a, b) => a/b; 

const reverseString = (...str) => str.reverse().join("");

const isPalindrome = str => {
    let reversed = str.split("").reverse().join("");
    return (str == reversed) ? "true" : "false";
}

console.log(isPalindrome("palindrome"));


module.exports = {add, sub, div, reverseString};
