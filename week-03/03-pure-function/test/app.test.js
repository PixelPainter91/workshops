// app.test.js
import { test } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";
import { test, expect } from "vitest";

findMaxValue([3, 7, 2, 8, 5]); // 8

test("findMax", function(){
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expected = 8;
    expect(result).toBe(expected);
});


findMaxValue([]); // null
test("findMax", function(){
    const result = findMaxValue([]);
    const expected = null;
    expect(result).toBe(expected);
});


findMaxValue([-10, -5, -1]); // -1
test("findMax", function(){
    const result = findMaxValue([-10, -6, -1]);
    const expected = -1;
    expect(result).toBe(expected);
});

findMaxValue("not an array"); // null
test("findMax", function(){
    const result = findMaxValue("not an array");
    const expected = null;
    expect(result).toBe(expected);
});

factorial(5); // 120
test("testFact", function(){
    const result = factorial(5);
    const expected = 120;
    expect(result).toBe(expected);
});

factorial(0); // 1
test("testFact", function(){
    const result = factorial(0);
    const expected = 1;
    expect(result).toBe(expected);
});


factorial(-3); // null
test("testFact", function(){
    const result = factorial(-3);
    const expected = null;
    expect(result).toBe(expected);
});


factorial("5"); // null
test("testFact", function(){
    const result = factorial("5");
    const expected = null;
    expect(result).toBe(expected);
});


areArraysEqual([1, 2, 3], [1, 2, 3]); // true
test("testArray", function(){
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    const expected = true;
    expect(result).toBe(expected);
    
});


areArraysEqual([1, 2, 3], [3, 2, 1]); // false
test("testArray", function(){
    const result = areArraysEqual([1, 2, 3], [3, 2, 1]);
    const expected = false;
    expect(result).toBe(expected);
    
});


areArraysEqual([], []); // true
test("testArray", function(){
    const result = areArraysEqual([], []);
    const expected = true;
    expect(result).toBe(expected);
    
});


areArraysEqual([1, 2], [1, 2, 3]); // false
test("testArray", function(){
    const result = areArraysEqual([1, 2,], [1, 2, 3]);
    const expected = false;
    expect(result).toBe(expected);
    
});

toTitleCase("hello world"); // "Hello World"
test("testTitle", function(){
    const result = toTitleCase("hello world");
    const expected = "Hello World";
    expect(result).toBe(expected);

});


toTitleCase("JAVASCRIPT IS FUN"); // "Javascript Is Fun"
test("testTitle", function(){
    const result = toTitleCase("JAVASCRIPT IS FUN");
    const expected = "Javascript Is Fun";
    expect(result).toBe(expected);

});
toTitleCase("123 testing titles"); // "123 Testing Titles"
test("testTitle", function(){
    const result = toTitleCase("123 testing titles");
    const expected = "123 Testing Titles";
    expect(result).toBe(expected);

});
toTitleCase(12345); // ""
test("testTitle", function(){
    const result = toTitleCase(12345)
    const expected ="";
    expect(result).toBe(expected);

});
