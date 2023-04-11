import No from "./No";


class ListaLigada{
    constructor(){
        this.head = null;
    }

    add(dado){
        let novo_no = new No(dado);

        if (this.isEmpty()){
            this.head = novo_no;
        }else{
            novo_no.proximo = this.head.proximo;
            this.head.proximo = novo_no;
        }
    }
    append(dado){
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
    removeFirst(){
        if (!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }else throw new Error("Lista está vazia");
    }

    removeLast(){
        if (!this.isEmpty()){
            let aux_a = this.head;
            let aux_b = this.head.proximo;
            while (aux_b.proximo !== null){
                aux_a = aux_b;
                aux_b = aux_b.proximo;
            }
            aux_a.proximo = null;
        }
    }

    isEmpty(){
        return this.head === null
    }
    size(){
        let aux = this.head;
        let cont = 0;
        while (aux.proximo != null){
            cont++;
            aux = aux.proximo;
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

export default ListaLigada;




/*
import No from "./No";


class ListaLigada{
    constructor(){
        this.head = new No();
    }

    add(dado){
        let novo_no = new No(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }
    append(dado){
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
    removeFirst(){
        if (!this.isEmpty()){
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }else throw new Error("Lista está vazia");
    }

    removeLast(){
        if (!this.isEmpty()){
            let aux_a = this.head;
            let aux_b = this.head.proximo;
            while (aux_b.proximo !== null){
                aux_a = aux_b;
                aux_b = aux_b.proximo;
            }
            aux_a.proximo = null;
        }
    }

    isEmpty(){
        return this.head.proximo === null
    }
    size(){
        let aux = this.head;
        let cont = 0;
        while (aux.proximo != null){
            cont++;
            aux = aux.proximo;
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

export default ListaLigada;


*/