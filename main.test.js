const functions = require("./main");
const add = functions.add;
const sub = functions.sub;
const div = functions.div;


test("testint maths funcions", () => {
    expect(add(6,4)).toBe(10)
    expect(sub(10,4)).toBe(6)
    expect(div(6,3)).toBe(2)
})