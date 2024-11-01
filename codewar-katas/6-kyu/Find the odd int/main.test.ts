import { findOdd } from "./main";

describe("findOdd", () => {
  test("should return the number that appears an odd number of times", () => {
    expect(findOdd([7])).toBe(7); // Solo hay un número que aparece 1 vez
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0); // 0 aparece 3 veces
    expect(findOdd([1, 2, 3, 2, 3, 1, 3])).toBe(3); // 3 aparece 3 veces
    expect(findOdd([10, 10, 10, 10, 10])).toBe(10); // 10 aparece 5 veces
  });

  test("should handle arrays with specific cases", () => {
    expect(findOdd([0])).toBe(0); // 0 aparece 1 vez
    expect(findOdd([1, 1, 2])).toBe(2); // 2 aparece 1 vez
    expect(findOdd([0, 1, 0, 1, 0])).toBe(0); // 0 aparece 3 veces
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4); // 4 aparece 1 vez
  });

  test("should handle arrays with larger number of elements", () => {
    expect(findOdd([1, 2, 2, 3, 1, 3, 3, 4, 4, 3, 3])).toBe(3); // 3 aparece 5 veces
  });
});
