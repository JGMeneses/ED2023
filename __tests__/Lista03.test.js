import Lista03 from "../src/Lista/Lista03";

let lista;

beforeEach (()=>{
    lista = new Lista03();
});

test("testando adição de elementos na lista", () => {
    lista.add(1);
    lista.add(2);
    lista.add(3);
    expect(lista.asArray()).toStrictEqual([1, 2, 3]);
});

test("testando remoção do último elemento da lista", () => {
    lista.add(1);
    lista.add(2);
    lista.add(3);
    lista.removeLast();
    expect(lista.asArray()).toStrictEqual([1, 2]);
});



test("testando a inversão da lista", () => {
    lista.add(1);
    lista.add(2);
    lista.add(3);
    expect(lista.inverter()).toStrictEqual([3, 2, 1]);
});
