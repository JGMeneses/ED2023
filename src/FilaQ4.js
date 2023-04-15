class FilaQ4{
    constructor(tam){
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tamanho = tam;
    }

    enqueue(){

    }

    dequeue(){

    }

    isEmpty(){
        return this.inicio === this.fim;
    }

    isFull(){

    }

    front(){
        if(!this.isEmpty()){
            this.dados[this.inicio];
        }else throw new Error("Empty Queue")
    }

    size(){
        if(this.inicio < this.fim){
            
        }
    }

    toString(){

    }
}