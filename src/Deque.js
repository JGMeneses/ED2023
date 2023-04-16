class Deque{
    constructor(tam){
        this.tamanho = tam;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    adicionarInicio(dado){
        if(!this.isFull()){
            this.dados[this.inicio] = dado


            if(this.inicio === this.fim){
                this.inicio = this.tamanho;
                this.fim++;
            }else{
                console.log(this.dados[this.inicio])
                this.inicio--;
                
            }
       }else{
            throw new Error("Queue overflow")
        }
    }

    adicionarFim(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado;
            if(this.fim === this.inicio){
                this.inicio = this.tamanho;
                this.fim++;
                
            }else{
                this.fim++
            }
        }else{
            
            throw new Error("Queue overflow")
        }
    }

    removerInicio(){
        if(!this.isEmpty()){
            let retorno ;
            
            this.inicio++;
            if(this.inicio === this.tamanho){
                this.inicio = 0;
                retorno = this.dados[this.inicio]
            }else{
                
                this.inicio++;
                retorno = this.dados[this.inicio]
            }
           
            return retorno;

        }else throw new Error("Queue underflow");
    }

    removerFim(){
        if(!this.isEmpty()){
            let retorno ;
            
            this.fim--;
            if(this.fim === this.tamanho-1){
                this.fim--;
                retorno = this.dados[this.fim];
            }else{
                
                this.fim--;
                retorno = this.dados[this.fim];
            }
            return retorno;

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
        if(this.inicio <= this.fim){
            return this.fim - this.inicio;
            
        }else{
            return this.tamanho - this.inicio + this.fim + 1;
           
        }
    }
    toString() {
        let str = '';
        for (let i = 0; i <= this.tamanho; i++) {
            if( this.dados[i] != null ){
                str += this.dados[i] + ',';
            }

        }
       
        return str;
   }

}

export default Deque;