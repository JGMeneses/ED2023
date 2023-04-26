import Lista04 from "../src/Lista/Lista04";

let lista;

beforeEach(() => {
  lista = new Lista04();
});

test("testando adição de elementos no início da lista", () => {
  lista.addFirst(1);
  lista.addFirst(2);
  lista.addFirst(3);
  expect(lista.asArray()).toStrictEqual([3, 2, 1]);
});

test("testando remoção do primeiro elemento da lista", () => {
  lista.addFirst(1);
  lista.addFirst(2);
  lista.addFirst(3);
  lista.removeFirst();
  expect(lista.asArray()).toStrictEqual([2, 1]);
});

test("testando adição de elementos no final da lista", () => {
    lista.append(1);
    lista.append(2);
    lista.append(3);
    expect(lista.asArray()).toStrictEqual([1, 2, 3]);
});


test("testando remoção do último elemento da lista", () => {
    lista.append(1);
    lista.append(2);
    lista.append(3);
    lista.removeLast();
    expect(lista.asArray()).toStrictEqual([1, 2]);
});
  
  test("testando a alternância da lista", () => {
    lista.addFirst(1);
    lista.addFirst(2);
    lista.addFirst(3);
    lista.addFirst(4);
    expect(lista.alternar()).toStrictEqual([2, 4, 3, 1]);
  });
  
 

