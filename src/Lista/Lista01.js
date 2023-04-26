class No {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}


//Fazer uma pilha basica com uma fila 
//Pilha só remove o ultimo elemento e adiciona apenas no final.
class Lista01{
    constructor(){
        this.head = new No();
    }

    //Append
    push(dado){
		let novo_no = new No(dado);

		if (this.isEmpty()) {
			this.head.proximo = novo_no;   
		} else {
			let aux = this.head.proximo;
			while (aux.proximo !== null) {
				aux = aux.proximo;
			}
			aux.proximo = novo_no;
		}

    }

    pop(){
        if(!this.isEmpty()){
            let auxA = this.head;
            let auxB = this.head.proximo;

            while(auxB.proximo !== null){
                auxA= auxB;
                auxB = auxB.proximo;
            }
            auxA.proximo = null;
        }else throw new Error("Lista underflow");
    }

    isEmpty(){
        return this.head.proximo === null;
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


export default Lista01;