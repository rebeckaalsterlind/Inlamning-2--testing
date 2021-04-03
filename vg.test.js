const { test, expect } = require("@jest/globals");
const VGfunctions = require("./vg");

const reverseString = VGfunctions.reverseString;
const isPalindrome = VGfunctions.isPalindrome;

test("return string reversed", () => {
    expect(reverseString(..."string to reverse")).toBe("esrever ot gnirts");
});

test("return true if is palindrome and false if not", () => {
   expect(isPalindrome("rotator")).toBe(true);
   expect(isPalindrome("notPalindrome")).toBe(false);
});

