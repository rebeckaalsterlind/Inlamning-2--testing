const { test, expect } = require("@jest/globals");
const functions = require("./main");
const add = functions.add;
const sub = functions.sub;
const div = functions.div;


test("testing maths + functions", () => {
    expect(add(6,4)).toBe(10);
});

test("maths - functions", () => {
    expect(sub(10,4)).toBe(6);
});

test("testing maths / functions", () => {
    expect(div(6,3)).toBe(2);
});