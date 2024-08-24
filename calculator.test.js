const add = require('./calculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

