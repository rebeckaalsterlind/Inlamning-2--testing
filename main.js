const add = (a, b) => a+b; 

const sub = (a, b) => a-b 

const div = (a, b) => a/b; 

let reverseString = (...str) => str.reverse().join("");



module.exports = {add, sub, div, reverseString};
console.log(module.exports)