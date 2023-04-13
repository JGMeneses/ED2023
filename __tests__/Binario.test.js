import Pilha from '../src/Pilha';

let p;

beforeEach(() => {
  p = new Pilha(8);
});

test('Deve inverter a ordem dos elementos da pilha', () => {
  p.push(10);
  const pConversorDecimal = p.ConversorDecimal(p);
 
  
  expect(pConversorDecimal).toBe('1010');
});
