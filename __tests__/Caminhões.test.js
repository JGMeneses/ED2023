import FilaCaminhoneiro from "../src/FilaCaminhao";


let f;

beforeEach (
    ()=> {
        f =  new FilaCaminhoneiro(10);
    }
);

test("O maximo de caminhões que pegaram carga será 10",() =>{



    f.adicionarCaminhao('1');
    f.adicionarCaminhao('2');
    f.adicionarCaminhao('3');
    f.adicionarCaminhao('4');
    f.adicionarCaminhao('5');
    f.adicionarCaminhao('6');
    f.adicionarCaminhao('7');
    f.adicionarCaminhao('8');
    f.adicionarCaminhao('9');
    f.adicionarCaminhao('10');
    

    

    expect(f.listar()).toBe("1,2,3,4,5,6,7,8,9,10");
});