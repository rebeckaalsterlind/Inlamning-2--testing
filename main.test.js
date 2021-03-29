const { test, expect } = require("@jest/globals");
const functions = require("./main");
const add = functions.add;
const sub = functions.sub;
const div = functions.div;


test("adding a with b", () => {
    expect(add(6,4)).toBe(10);
});

test("subtracting a with b", () => {
    expect(sub(10,4)).toBe(6);
});

test("dividing a with b", () => {
    expect(div(6,3)).toBe(2);
});