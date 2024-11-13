import { isValidWalk } from "./main";

describe("Take a Ten Minutes Walk", () => {
  it("should return true for a valid 10-minute walk returning to the starting point", () => {
    const walk = ["n", "e", "s", "w", "n", "s", "e", "w", "n", "s"];
    expect(isValidWalk(walk)).toBe(true);
  });

  it("should return true for another valid 10-minute walk returning to the starting point", () => {
    const walk = ["n", "s", "e", "w", "e", "w", "n", "s", "n", "s"];
    expect(isValidWalk(walk)).toBe(true);
  });
  it("should return true for a valid 10-minute walk that returns to the starting point", () => {
    const walk = ["n", "s", "e", "w", "n", "s", "e", "w", "n", "s"];
    expect(isValidWalk(walk)).toBe(true);
  });

  it("should return true for another valid 10-minute walk", () => {
    const walk = ["n", "s", "n", "s", "e", "w", "e", "w", "n", "s"];
    expect(isValidWalk(walk)).toBe(true);
  });

  it("should return false if the walk does not have 10 steps", () => {
    const walk = ["n", "s", "e", "w", "n", "s", "e", "w"];
    expect(isValidWalk(walk)).toBe(false);
  });

  it("should return false if the walk does not return to the starting point", () => {
    const walk = ["n", "n", "e", "w", "n", "s", "e", "w", "n", "s"];
    expect(isValidWalk(walk)).toBe(false);
  });
});
