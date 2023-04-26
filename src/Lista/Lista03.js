class No{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

//preciso inverter a ordem de uma lista

class Lista03{
    constructor(){
        this.header = new No();
    }

    //adicionar 
    add(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.header.proximo = novo_no;
        }else{
            let aux = this.header.proximo;
            while(aux.proximo != null){
               aux =  aux.proximo;
            }
            aux.proximo = novo_no;
        }
    }

    //remover fim
    removeLast(){
        if(!this.isEmpty()){
            let auxA = this.header;
            let auxB = this.header.proximo;

            while(auxB.proximo != null){
                auxA = auxB;
                auxB = auxB.proximo;
            }

            auxA.proximo = null;
        }else throw new Error("Lista underflow");
    }

    

    //tamanho
    size(){
        let a = this.header;
        let cont = 0;
        while(a.proximo != null){
            cont++;
            a = a.proximo;
        }

        return cont;
    }

    //vazio
    isEmpty(){
        return this.header.proximo === null;
    }

    asArray(){
        let aux = this.header.proximo;
        let dados = [];
        while (aux != null){
            dados.push(aux.dado);
            aux = aux.proximo;
        }
        return dados;
    }

    addFirst(dado){
        let novo_no = new No(dado);
        novo_no.proximo = this.header.proximo;
        this.header.proximo = novo_no;
    }

    //inverter
    inverter() {
        let novaLista = new Lista03();
    
        let aux = this.header.proximo;
        while (aux !== null) {
            let novoNo = new No(aux.dado);
            novaLista.addFirst(novoNo.dado);
            aux = aux.proximo;
        }
    
        return novaLista.asArray();
    }
    
    

}

export default Lista03;