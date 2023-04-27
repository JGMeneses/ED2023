class No{
    constructor(dado){
        this.dado = dado;
        this.anterior = null;
        this.proximo = null;
    }
}


class ListaDuplamenteLigada{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
            novo_no.anterior = null;
            novo_no.proximo = null;
        }else{
            novo_no.proximo = this.head;
			novo_no.anterior = null;
			this.head.anterior = novo_no;
			this.head = novo_no;
        }
    }

    append(dado){
        let novo_no = new No(dado);
        if(this.isEmpty()){
            this.head = novo_no;
            this.tail = novo_no;
            novo_no.anterior = null;
            novo_no.proximo = null;
        }else{
            novo_no.proximo = null;
            novo_no.anterior = this.tail;
            this.tail.proximo = novo_no;
            this.tail = novo_no;
        }
    }

    removeFirst(){
        if(!this.isEmpty()){
            if(this.size()===1){
                this.head = null;
                this.tail = null
            }else{
                this.head = this.head.proximo;
                this.head.anterior = null;
            }
        }
    }

    removeLast(){
        if(!this.isEmpty()){
            if(this.size()===1){
                this.head = null;
                this.tail = null;
            }else{
                this.tail = this.tail.anterior;
                this.tail.proximo = null;

            }
        }
    }

    isEmpty() {
		return this.head === null;
	}

    size(){
        let aux = this.head;
        let cont = 0;

        while(aux != null){
            aux = aux.proximo;
            cont++;
        }

        return cont;
    }
    toString() {
		let tmp = this.head;
		let texto = "";

		while (tmp != null) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
	}
    asArray() {
		let current = this.head;
		let dados = [];

		while (current != null) {
			dados.push(current.dado);
			current = current.proximo;
		}

		return dados;
	}



    remove(dado) {
		if (!this.isEmpty()) {
			let current = this.head;
			let next = this.head.proximo;
			let last = this.tail;
			let aux;

			if (current.dado === dado) {
				return this.removeFirst();
			} else if (last.dado === dado) {
				return this.removeLast();
			} else {
				while (next != null) {
					if (next.dado === dado) {
						aux = next.proximo;
						current.proximo = next.proximo;
						aux.anterior = current;
						return true;
					}
					//iteração
					current = next;
					next = next.proximo;
				}
			}
		}

		return false;
	}

    addAt(posicao, dado) {
		if (posicao >= this.length()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 1;

				let aux_a = this.head;
				let aux_b = this.head.proximo;

				while (i != posicao) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
				novo_no.anterior = aux_a;
				aux_b.anterior = novo_no;
			}
		}
	}

    search(dado) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head;
			while (tmp !== null) {
				if (tmp.dado == dado) {
					return true;
				}
				//iteração
				tmp = tmp.proximo;
			}
			return false;
		}
	}

	clear() {
		this.head = null;
		this.tail = null;
	}
}
export default ListaDuplamenteLigada;