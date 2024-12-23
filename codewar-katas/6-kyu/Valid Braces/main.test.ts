import { validBraces } from "./main";

describe("validBraces", () => {
  test("Valid cases", () => {
    expect(validBraces("(){}[]")).toBe(true); // Simple valid
    expect(validBraces("([{}])")).toBe(true); // Nested valid
    expect(validBraces("{[()]}")).toBe(true); // Mixed order valid
    expect(validBraces("")).toBe(true); // Empty string
  });

  test("Invalid cases", () => {
    expect(validBraces("(}")).toBe(false); // Mismatched braces
    expect(validBraces("[(])")).toBe(false); // Crossed braces
    expect(validBraces("[({})](]")).toBe(false); // Extra closing brace
    expect(validBraces("(((")).toBe(false); // Unclosed braces
    expect(validBraces("{[}]")).toBe(false); // Incorrect nesting
  });

  test("Edge cases", () => {
    expect(validBraces("()")).toBe(true); // Minimal valid
    expect(validBraces("{")).toBe(false); // Single opening brace
    expect(validBraces("}")).toBe(false); // Single closing brace
    expect(validBraces("{[(()])}")).toBe(false); // Incorrect nested braces
    expect(validBraces("{[()()]}")).toBe(true); // Repeated patterns valid
  });
});
