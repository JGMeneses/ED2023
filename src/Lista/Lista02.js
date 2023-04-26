class No {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }

  class Lista02{
    constructor(){
        this.head = new No();
    }

    //append
    enqueue(dado){
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

    //removeFirst
    dequeue(){
        if(!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }else throw new Error("Lista está vazia");
    }

    size(){
        let aux = this.head;
        let cont = 0;

        while(aux.proximo != null){
            cont++;
            aux.proximo;
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
}


  export default Lista02;