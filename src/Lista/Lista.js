class No{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class Lista{
    constructor(){
        this.head = new No();
    }

    add(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.head.proximo = novo_no;
        }else{
            novo_no.proximo= this.head.proximo;
            this.head.proximo = novo_no;
        }
    }

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

    removeFirst(){
        aux = this.head.proximo
        this.head.proximo = aux.proximo;
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

    isEmpty(){
        return this.head.proximo === null;
    }

    size(){
        let aux = this.head.proximo;
        let cont = 0;

        while(aux != null){
            aux = aux.proximo;
            cont++;
        }

        return cont;
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


}

export default Lista;