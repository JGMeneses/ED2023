import Fila from "./Fila";

class FilaCaminhoneiro{

    constructor(tam =10){
        this.filaAux = new Fila(tam);
    }


    adicionarCaminhao(dado){
        
        this.filaAux.enqueue(dado);
        
    }

    removerCaminhao(){
        
        this.filaAux.dequeue()
        
    }

    listar(){
       return this.filaAux.toString();
    }
}

export default FilaCaminhoneiro;