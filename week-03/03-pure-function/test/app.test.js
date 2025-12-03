// app.test.js
import { test } from "vitest";
import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";
import { expect } from "chai";

findMaxValue([3, 7, 2, 8, 5]); // 8

test("findMax", function(){
    const result = findMaxValue([3, 7, 2, 8, 5]);
    const expected = 5;
    expect(result).containSubset(expected);
});
