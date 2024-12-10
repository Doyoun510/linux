const { sum } = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3); // 정상적으로 작동해야 함
});

test("adds 100 + (-50) to equal 50", () => {
    expect(sum(100, -50)).toBe(50); // 마찬가지로 정상적으로 작동해야 함
});
