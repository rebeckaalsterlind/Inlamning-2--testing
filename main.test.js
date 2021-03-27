const { test, expect } = require("@jest/globals");
const functions = require("./main");
const add = functions.add;
const sub = functions.sub;
const div = functions.div;
const reverseString = functions.reverseString;

test("testing maths functions", () => {
    expect(add(6,4)).toBe(10)
    expect(sub(10,4)).toBe(6)
    expect(div(6,3)).toBe(2)
})

test("to see if function returns string reversed", () => {
    expect(reverseString(..."string to reverse")).toBe("esrever ot gnirts")
})