import { duplicateCount } from "./main";

describe("duplicateCount", () => {
  test("returns 0 when no characters repeat", () => {
    expect(duplicateCount("abcde")).toBe(0);
  });

  test("returns 2 for 'aabbcde'", () => {
    expect(duplicateCount("aabbcde")).toBe(2);
  });

  test("handles case insensitivity, e.g., 'aabBcde'", () => {
    expect(duplicateCount("aabBcde")).toBe(2);
  });

  test("counts 'i' in 'indivisibility'", () => {
    expect(duplicateCount("indivisibility")).toBe(1);
  });

  test("counts 'i' and 's' in 'Indivisibilities'", () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });

  test("counts 'a' and '1' in 'aA11'", () => {
    expect(duplicateCount("aA11")).toBe(2);
  });

  test("counts 'A' and 'B' in 'ABBA'", () => {
    expect(duplicateCount("ABBA")).toBe(2);
  });
});
