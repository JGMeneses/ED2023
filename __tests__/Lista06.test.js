import Lista06 from "../src/Lista/Lista06";

let lista;

beforeEach(() => {
  lista = new Lista06();
});

test("testando adição de elementos no final da lista", () => {
    lista.append(1);
    lista.append(2);
    lista.append(3);
    expect(lista.asArray()).toStrictEqual([1, 2, 3]);
});

test("testando tamanho da lista", () => {
    lista.append(1);
    lista.append(2);
    lista.append(3);
    expect(lista.size()).toBe(3);
});

test("testando se a lista está vazia", () => {
    expect(lista.isEmpty()).toBe(true);
    lista.append(1);
    expect(lista.isEmpty()).toBe(false);
});

test("testando substring da lista", () => {
    lista.append("A");
    lista.append("B");
    lista.append("C");
    lista.append("D");
    lista.append("E");

    expect(lista.substring("A","E")).toStrictEqual(["B","C","D"]);
});

