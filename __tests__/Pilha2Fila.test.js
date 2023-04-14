import Pilha from "../src/Pilha2Fila";
import Fila from "../src/Fila2Pilha";

let p;
let f;

beforeEach(
    () => {
        p = new Pilha(5);
        f = new Fila(5);
    }
);

test('Deve adicionar e remover elementos da pilha', () => {
  
    p.push('A');
    p.push('B');
    p.push('C');
    p.push('D');
    p.pop('D');
   

  
    
    const resultado = p.toString();
   
  
    expect(resultado).toBe('C,B,A');
  });

  test('Deve adicionar e remover elementos da pilha', () => {
  
    f.enqueue('A');
    f.enqueue('B');
    f.enqueue('C');
    f.enqueue('D');
    f.dequeue('D');
   

  
    
    const resultado = p.toString();
   
  
    expect(resultado).toBe('d,C,B,A');
  });