import { test, expect, describe } from "vitest";

function isPalindrome(string) {
  // return true or false, depending on whether the supplied string parameter is a palindrome
}

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = isPalindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = isPalindrome("nurses run");
    expect(result).toBe(true);
  });
});

describe("Words that are NOT palindromic", function () {
  test("Tim is great", function () {
    const result = isPalindrome("Tim is great");
    expect(result).toBe(false);
  });
  test("Weeeeeee", function () {
    const result = isPalindrome("Weeeeeee");
    expect(result).toBe(false);
  });
});