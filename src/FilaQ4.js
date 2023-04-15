

class FilaQ4{
    constructor(tam){
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tamanho = tam;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] =dado;
            if(this.fim === this.tam){
                this.fim = 0;
            }else{
                this.fim++;
            }
        }else throw new Error("Queue overflow");
    }
   

    dequeue(){
        if(!this.isEmpty()){
            let retorno;
            retorno = this.dados[this.inicio]
            if(this.inicio === this.tamanho){
                this.inicio = 0;
            }else{
                this.inicio++;
            }
            return retorno;
        }else throw new Error("Queue underflow");
    }

    isEmpty(){
        return this.inicio === this.fim;
    }

    isFull(){
        return this.size() === this.tamanho;
    }

    front(){
        if(!this.isEmpty()){
            this.dados[this.inicio];
        }else throw new Error("Empty Queue")
    }

    size(){
        if(this.inicio < this.fim){
            return this.fim - this.inicio;
        }else{
            return this.tamanho - this.inicio + this.fim + 1;
        }
    }

    toString(){
        let result = "";
        for (let i = 0; i < this.size(); i++) {
            result += this.dados[i % this.tamanho];
            if (i !== this.inicio + this.size() - 1) {
                result += ',';
            }
        }
        return result; 
    }


    intercala(f1, f2){
        let f3 = new FilaQ4(10);


        while(!f1.isEmpty() && !f2.isEmpty()){
            f3.enqueue(f1.dequeue());
            f3.enqueue(f2.dequeue());
        }
        
        return f3.toString();
    }
}

export default FilaQ4;