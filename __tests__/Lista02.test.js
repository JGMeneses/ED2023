import Lista02 from "../src/Lista/Lista02";

let fila;

beforeEach (()=>{
  fila = new Lista02();
});

test("testando o método enqueue", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  expect(fila.asArray()).toStrictEqual([1, 2, 3]);
});

test("testando o método dequeue", () => {
  fila.enqueue(1);
  fila.enqueue(2);
  fila.enqueue(3);
  fila.dequeue();
  expect(fila.asArray()).toStrictEqual([2, 3]);
});


