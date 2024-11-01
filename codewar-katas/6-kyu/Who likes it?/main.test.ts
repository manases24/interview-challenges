import { likes } from "./main";

describe("likes function", () => {
  test('should return "no one likes this" for an empty array', () => {
    expect(likes([])).toBe("no one likes this");
  });

  test('should return "Peter likes this" for one name', () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  test('should return "Jacob and Alex like this" for two names', () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  test('should return "Max, John and Mark like this" for three names', () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test('should return "Alex, Jacob and 2 others like this" for four names', () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
  });
});
