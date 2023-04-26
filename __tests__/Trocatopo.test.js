import Pilha from '../src/Pilha/Pilha';
let p;


beforeEach(() => {
  p = new Pilha(5);
});

test('Deve inverter a ordem dos elementos da pilha', () => {

    p.push('P');
    p.push('I');
    p.push('L');
    p.push('H');
    p.push('A');

    

    const pInvertida = p.InvertePilha(p);
    
  
    expect(pInvertida).toBe('A,I,L,H,P');
});