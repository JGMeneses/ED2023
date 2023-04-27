import Lista from "../src/Lista/Lista";

let lista;

beforeEach(() => {
  lista = new Lista();
});

test("testando size", () => {
  lista.add(1);
  lista.add(2);
  lista.add(3);
  expect(lista.size()).toBe(3);
});

test("testando asArray", () => {
    lista.add(1);
    lista.add(2);
    lista.add(3);
    lista.removeLast();
    expect(lista.asArray()).toEqual([3, 2]);
});


test("testando asArray", () => {
    lista.append(1);
    lista.append(2);
    lista.append(3);
    
    expect(lista.asArray()).toEqual([1,2,3]);
});
