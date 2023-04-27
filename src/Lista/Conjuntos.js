import ListaDuplamenteLigada from "../Lista/ListaDuplaEncadeada";

class Conjunto{
    constructor(){
        this.dados = new ListaDuplamenteLigada();
    }

    add(dado){
        if(!this.has(dado)){
            this.dados.add(dado)
        }
    }

    delete(dado){
        this.dados.remove(dado);
    }

    has(dado){
        return this.dados.search(dado);
    }

    clear(){
        this.dados.clear();
    }

    size(){
        return this.dados.size();
    }

    values(){
        return this.dados.asArray();
    }

    union(outroConjunto){
        let resultado = new Conjunto();

        let array_a = this.dados.asArray();
        let array_b = outroConjunto.dados.asArray();

        for (let a of array_a){
            resultado.add(a);
        }
        for (let b of array_b){
            resultado.add(b);
        }

        return resultado;
    
    }

    intersection(outroConjunto){
        let array_b = outroConjunto.values();
        let resultado = new Conjunto();

        for( let b of array_b){
            if (this.has(b)){
                resultado.add(b)
            }
        }

        return resultado;
    
    }



    contains(outroConjunto){
        let array_b = outroConjunto.values();

        for (let b of array_b){
            if (!this.has(b)){
                return false;
            }
        }

        return true;
    }

    isEqual(outroConjunto){
        return this.contains(outroConjunto) && outroConjunto.contains(this);
    }
    difference(outroConjunto){
        let resultado = new Conjunto();
        let array_a = this.dados.asArray();
        let array_b = outroConjunto.dados.asArray();

        for (let a of array_a){
            resultado.add(a);
        }

        for (let b of array_b){
            resultado.delete(b);
        }

        return resultado;
    }

}

export default Conjunto;