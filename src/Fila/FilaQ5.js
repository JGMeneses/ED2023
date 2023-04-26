class FIlaQ5{
    constructor(tam){
        this.tamanho = tam;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.cauda = this.tamanho;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado;
            if(this.fim === this.tamanho){
                this.fim = 0;
            }else{
                this.fim++;
            }

            
        }else throw new Error("Queue overflow")
    }

    enqueueCauda(dado){
        if(!this.isFull()){
            this.dados[this.cauda] = dado;
            this.cauda--;
        }else throw new Error("Queue overflow")
    }

    dequeue(){
        if(!this.isEmpty()){
            let retorno ;
            retorno = this.dados[this.inicio]
            if(this.inicio === this.tamanho ){
                this.inicio = 0;
            }else{
                this.inicio++;
            }
            return retorno;
        }else throw new Error("Queue underflow");

    }

    dequeueCauda(){
        if(!this.cauda === this.tamanho){
            this.cauda++;
        }else throw new Error("Queue underflow");
    }

    front(){
        if(!this.isEmpty()){
           return this.dados[this.inicio];
        }else throw new Error("Empty queue")
       
    }
    isEmpty(){
        return this.inicio === this.fim;
    }

    isFull(){
        return this.tamanho === this.size()
    }

    size(){
        if(this.inicio < this.fim){
           return this.fim - this.tamanho ;
        }else{
            this.tamanho - this.inicio + this.fim + 1;
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
}