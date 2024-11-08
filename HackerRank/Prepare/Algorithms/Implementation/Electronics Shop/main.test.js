import { getMoneySpent } from "./main";

describe("Electronics Shop", () => {
  test("should return 9 for budget 10 with keyboards [3, 1] and USB drives [5, 2, 8]", () => {
    const budget = 10;
    const keyboards = [3, 1];
    const drives = [5, 2, 8];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(9);
  });

  test("should return -1 for budget 5 with keyboard [4] and USB drive [5]", () => {
    const budget = 5;
    const keyboards = [4];
    const drives = [5];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(-1);
  });

  test("should return 15 for budget 20 with keyboards [10, 9] and USB drives [5, 8, 6]", () => {
    const budget = 20;
    const keyboards = [10, 9];
    const drives = [5, 8, 6];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(15);
  });

  test("should return 10 for budget 15 with keyboards [5] and USB drives [5]", () => {
    const budget = 15;
    const keyboards = [5];
    const drives = [5];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(10);
  });

  test("should return -1 for budget 1 with keyboards [2] and USB drives [3]", () => {
    const budget = 1;
    const keyboards = [2];
    const drives = [3];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(-1);
  });

  test("should return 10 for budget 10 with keyboards [6, 7] and USB drives [4, 5]", () => {
    const budget = 10;
    const keyboards = [6, 7];
    const drives = [4, 5];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(10);
  });

  test("should return 0 for budget 0 with keyboards [1, 2] and USB drives [3, 4]", () => {
    const budget = 0;
    const keyboards = [1, 2];
    const drives = [3, 4];

    expect(getMoneySpent(keyboards, drives, budget)).toBe(-1); // Impossible to buy
  });
});
