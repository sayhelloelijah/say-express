const sum = require("./app");

test("should add numbers together", () => {
    expect(sum(1, 2)).toBe(3);
});

test("should output nothing", () => {
    expect(sum()).toBe(NaN);
});
