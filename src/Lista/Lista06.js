class No{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}


class Lista06{
    constructor(){
        this.head = new No();
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

    size(){
        let auxA = this.head.proximo;
        let cont = 0;

        while(auxA != null){
            auxA = auxA.proximo;
            cont++;
        }
        console.log(cont)
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


  

    substring(Elemento1, Elemento2){
        let ListaAux = new Lista06();
        let aux = this.head.proximo;
    
        while(aux.dado != Elemento1 ){
            aux = aux.proximo;
            
        }
    
        ListaAux.append(aux.dado);
        while(aux.dado != Elemento2){
            aux = aux.proximo;
            ListaAux.append(aux.dado)
        }
    
        
    
        return ListaAux.asArray();
    }

}

export default Lista06;