import { countingValleys } from "./main";

describe("countingValleys", () => {
  test('debe contar un valle en el camino "UDDDUDUU"', () => {
    const steps = 8;
    const path = "UDDDUDUU";
    const result = countingValleys(steps, path);
    expect(result).toBe(1);
  });

  test('debe contar dos valles en el camino "DDUUDDUDUUUD"', () => {
    const steps = 12;
    const path = "DDUUDDUDUUUD";
    const result = countingValleys(steps, path);
    expect(result).toBe(2);
  });

  test('debe devolver 0 si no hay valles en el camino "UUUU"', () => {
    const steps = 4;
    const path = "UUUU";
    const result = countingValleys(steps, path);
    expect(result).toBe(0);
  });

  test('debe devolver 0 si no hay valles en el camino "DDDD"', () => {
    const steps = 4;
    const path = "DDDD";
    const result = countingValleys(steps, path);
    expect(result).toBe(0);
  });

  test("debe devolver 0 para un camino vacío", () => {
    const steps = 0;
    const path = "";
    const result = countingValleys(steps, path);
    expect(result).toBe(0);
  });

  test('debe contar un valle cuando el camino termina en un valle "DDUU"', () => {
    const steps = 4;
    const path = "DDUU";
    const result = countingValleys(steps, path);
    expect(result).toBe(1);
  });
});
