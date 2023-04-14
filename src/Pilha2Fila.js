import Fila from "./Fila";

class Pilha2F{
    constructor(tam){
        this.tamanho = tam;
        this.filaAux1 = new Fila(this.tamanho);
        this.filaAux2 = new Fila(this.tamanho);

    }

    push(dado){
        if(!this.isFull()){
            this.filaAux2.enqueue(dado);
            while(!this.filaAux1.isEmpty()){
                this.filaAux2.enqueue(this.filaAux1.front());
                this.filaAux1.dequeue();
            }

            while(!this.filaAux2.isEmpty()){
                this.filaAux1.enqueue(this.filaAux2.front());
                this.filaAux2.dequeue();
            }

        }else throw new Error("Stack overflow")
    }

    pop(){
        if(!this.filaAux1.isEmpty()){
            this.filaAux1.dequeue();
        }else throw new Error("Stack underflow")
    }

    isFull(){
        return this.filaAux1.isFull();
    }

    toString() {
        let result = '';
        for(let i = 0; i < this.filaAux1.size(); i++) {
            result += this.filaAux1.front();
            if(i < this.filaAux1.size() - 1) {
                result += ',';
            }
            this.filaAux1.enqueue(this.filaAux1.front());
            this.filaAux1.dequeue();
        }
        return result;
    }
}

export default Pilha2F;

