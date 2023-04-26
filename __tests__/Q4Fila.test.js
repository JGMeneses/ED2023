import Fila  from "../src/Fila/FilaQ4";

let f, f2;
let tamanho = 5;
beforeEach (
    ()=>{
        f = new Fila(tamanho); 
        f2 = new Fila(tamanho); 

});

test("O comando enqueue em uma fila cheia retorna Erro de queue overflow",
    () => {
     
        f.enqueue('A');
        
        f.enqueue('B');
        
        f.enqueue('C');

        f2.enqueue('D');
        
        f2.enqueue('E');
        
        f2.enqueue('F');
        
        expect(f.intercala(f,f2)).toBe("A,D,B,E,C,F");
    }
);