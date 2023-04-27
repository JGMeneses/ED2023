import ListaDuplaEncadeada from "../src/Lista/ListaDuplaEncadeada";

let lista;

beforeEach(() => {
    lista = new ListaDuplaEncadeada();
});

test("testando size", () => {
  lista.add(1);
  lista.add(2);
  lista.add(3);
  expect(lista.size()).toBe(3);
});

test("testando isEmpty", () => {
  expect(lista.isEmpty()).toBe(true);
});

test("testando add", () => {
  lista.add(1);
  lista.add(2);
  expect(lista.toString()).toBe("2->1");

});

test("testando toString", () => {
    lista.add(1);
    lista.add(2);
    lista.add(3);
    expect(lista.toString()).toBe("3->2->1");
  });

test("testando append", () => {
    lista.append(1);
    lista.append(2);
    expect(lista.toString()).toBe("1->2");
  
  });
test("testando removeFirst", () => {
  lista.add(1);
  lista.add(2);
  lista.add(3);
  lista.removeFirst();
  expect(lista.toString()).toBe("2->1");
});

test("testando removeLast", () => {
  lista.add(1);
  lista.add(2);
  lista.add(3);
  lista.removeLast();
  expect(lista.toString()).toBe("3->2");
});

