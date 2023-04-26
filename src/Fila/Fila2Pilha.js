import Pilha from "../Pilha/Pilha";

class Fila2Pilha{
    constructor(tam){
        this.tamanho = tam;
        this.pilhaAux = new Pilha(this.tamanho);
        this.pilhaAux2 = new Pilha(this.tamanho);
    }


    enqueue(dado){
        if(!this.isFull()){
            
            while(!this.pilhaAux.isEmpty()){
                this.pilhaAux2.push(this.pilhaAux.top());
                this.pilhaAux.pop();
            }
            this.pilhaAux.push(dado)

            while(!this.pilhaAux2.isEmpty()){
                this.pilhaAux.push(this.pilhaAux2.top());
                this.pilhaAux2.pop();
            }

        }else throw Error("Queue overflow")
    }

    dequeue(){
        if(!this.isEmpty()){
            this.pilhaAux.pop();
        }else throw Error("Queue underflow")
    }


    isFull(){
        return this.pilhaAux.isFull();
    }

    isEmpty(){
        return this.pilhaAux.isEmpty();
    }

    toString() {
        let result = "";
        for (let i = this.pilhaAux.size()-1; i >= 0; i--) {
            result += `${this.pilhaAux.dados[i]}`;
            if (i !== 0) {
                result += ",";
            }
        }
        return result;
    }

   
}
export default Fila2Pilha;