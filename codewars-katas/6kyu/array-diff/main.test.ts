import { arrayDiff } from "./main";

describe("arrayDiff", () => {
  it("debe eliminar los elementos de a que están en b", () => {
    const a = [1, 2, 2, 2, 3];
    const b = [2];
    const resultadoEsperado = [1, 3];

    const resultado = arrayDiff(a, b);

    expect(resultado).toEqual(resultadoEsperado);
  });

  it("debe devolver un array vacío si todos los elementos están en b", () => {
    const a = [2, 2, 2];
    const b = [2];
    const resultadoEsperado: number[] = [];

    const resultado = arrayDiff(a, b);

    expect(resultado).toEqual(resultadoEsperado);
  });

  it("debe devolver el mismo array si b está vacío", () => {
    const a = [1, 2, 3];
    const b: number[] = []; // Array vacío
    const resultadoEsperado = [1, 2, 3];

    const resultado = arrayDiff(a, b);

    expect(resultado).toEqual(resultadoEsperado);
  });
});
