import Deque from "../src/Fila/Deque";


let d;

beforeEach (()=>{
    d = new Deque(5);
}); 




test("inserção e Remoção do fim e incio", ()=>{
    
    d.adicionarFim("fim0")
    d.adicionarFim("fim1")
    d.adicionarInicio("inicio0")
    d.adicionarInicio("inicio1")
   
  

    expect(d.toString()).toBe("fim0,fim1,inicio1,inicio0,");
   
});


test("Instaciação", ()=>{
    expect(d.size()).toBe(0)
});

test("inserção e Remoção do Inicio", ()=>{
    d.adicionarInicio("inicio0")
    d.adicionarInicio("iniciotam")

    expect(d.removerInicio()).toBe("inicio0");
   
});

test("inserção e Remoção do fim", ()=>{
    d.adicionarFim("fim0")
    d.adicionarFim("fim1")
    d.adicionarFim("fim2")

    expect(d.removerFim()).toBe("fim1");
   
});