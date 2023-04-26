import Lista01 from "../src/Lista/Lista01";

let pilha;


beforeEach (()=>{
    pilha = new Lista01();
});


test("testando a pilha com lista simples", () => {

  // testando o método push
  pilha.push(1);
  pilha.push(2);
  pilha.push(3);

  expect(pilha.asArray()).toStrictEqual([1, 2, 3]);

  
});

test("testando o método pop",()=>{
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);    
    pilha.pop();

expect(pilha.asArray()).toStrictEqual([1, 2 ]);
})

