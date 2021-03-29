const { test, expect } = require("@jest/globals");
const VGfunctions = require("./vg");

const reverseString = VGfunctions.reverseString;
const isPalindrome = VGfunctions.isPalindrome;

test("return string reversed", () => {
    expect(reverseString(..."string to reverse")).toBe("esrever ot gnirts")
});

test("return true if is palindrome and false if not", () => {
    expect(isPalindrome("rotator")).toBeTruthy()
    expect(isPalindrome("notPalindrome")).toBe(false)
});


// test("shall return true if is palindrome and false if not", () => {
//     expect(isPalindrome("rotator")).toBeTrue()
//     //expect(isPalindrome("notPalindrome").toBe(false));
// })