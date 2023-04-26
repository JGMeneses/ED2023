class No{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class Lista04{
    constructor(){
        this.head = new No();
    }

    addFirst(dado){
        let novo_no = new No(dado);
        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    removeFirst(){
        if (!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
            aux.proximo = null; // opcional, mas recomendado para evitar referências desnecessárias
        } else {
            throw new Error("Lista está vazia");
        }
    }


    //adiciona no fim
    append(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.head.proximo = novo_no;
        }else{
            let aux = this.head.proximo;
            while(aux.proximo != null){
                aux = aux.proximo;
            }
            aux.proximo = novo_no;
        }
    }

    removeLast(){
        if(!this.isEmpty()){
            let auxA = this.head;
            let auxB = this.head.proximo;

            while(auxB.proximo != null){
                auxA = auxB;
                auxB = auxB.proximo;
            }

            auxA.proximo = null;
        }else throw new Error("Lista underflow")
    }


    size(){
       let a = this.head;
       let cont = 0;
       while(a.proximo != null){
            cont++;
            a = a.proximo;
       }

       return cont;
    }
    isEmpty(){
        return this.head.proximo === null;
    }


    asArray(){
        let aux = this.head.proximo;
        let dados = [];
        while (aux != null){
            dados.push(aux.dado);
            aux = aux.proximo;
        }
        return dados;
    }


    alternar(l1) {
      
    
        let novaListaAux = new Lista04();
        let aux = this.head.proximo;
        let adicionouComeco = false;
        let Resultado = new Lista04();
        
        
        while (aux !== null) {
        
            if (adicionouComeco === false) {
                novaListaAux.addFirst(aux.dado);
                console.log(aux.dado +" adicionou começo")
                this.removeFirst();
                console.log(aux.dado+ "excluido")
                adicionouComeco = true;

            } else {
                novaListaAux.append(aux.dado);
                console.log(aux.dado +"FIm")
                this.removeFirst();
                console.log(aux.dado+ "excluido")
                adicionouComeco = false;

            }
            aux =this.head.proximo;
        }

      
        return novaListaAux.asArray();
    }
}

export default Lista04;