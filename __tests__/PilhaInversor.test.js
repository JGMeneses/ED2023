import Pilha from '../src/Pilha';
let p;


beforeEach(() => {
  p = new Pilha(8);
});

test('Deve inverter a ordem dos elementos da pilha', () => {
  
  p.push('A');
  p.push('B');
  p.push('A');
  p.push('C');
  p.push('A');
  p.push('X');
  p.push('I');

  
  const pInvertida = p.inverso(p);
 

  expect(pInvertida).toBe('I,X,A,C,A,B,A');
});

