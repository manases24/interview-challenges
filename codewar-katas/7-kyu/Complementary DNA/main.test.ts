import { dnaStrand } from "./main";

describe("dnaStrand", () => {
  test('returns "TAACG" for input "ATTGC"', () => {
    expect(dnaStrand("ATTGC")).toBe("TAACG");
  });

  test('returns "CATA" for input "GTAT"', () => {
    expect(dnaStrand("GTAT")).toBe("CATA");
  });

  test('returns "CGATCG" for input "GCTAGC"', () => {
    expect(dnaStrand("GCTAGC")).toBe("CGATCG");
  });

  test('returns "TACG" for input "ATGC"', () => {
    expect(dnaStrand("ATGC")).toBe("TACG");
  });

  test("returns an empty string when input is an empty string", () => {
    expect(dnaStrand("")).toBe("");
  });
  test('returns "TTTT" for input "AAAA"', () => {
    expect(dnaStrand("AAAA")).toBe("TTTT");
  });
});
