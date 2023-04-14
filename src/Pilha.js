class Pilha{
    constructor(tam){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    push(dado){
        if (!this.isFull()){
            this.dados[this.topo] = dado;
            this.topo++
        }else{
            throw new Error("Stack overflow");
        }
    }
    pop(){
        if(!this.isEmpty()){
            this.topo--;
        }else{
            throw new Error("Stack underflow");
        }
    }
    isEmpty(){
        return ( this.size() === 0)
    }
    isFull(){
        return ( this.size() >= this.tam)
    }
    size(){
        return this.topo;
    }
    top(){
        if(!this.isEmpty()){
            return this.dados[this.topo-1];
        }else {
            throw new Error("Stack underflow")
        }
    }

    toString() {
        let result = "";
        for (let i = 0; i < this.topo; i++) {
          result += this.dados[i];
          if (i !== this.topo - 1) {
            result += ",";
          }
        }
        return result;
    }
    TextoBinario() {
        let result = "";
        for (let i = 0; i < this.topo; i++) {
          result += this.dados[i];
          
        }
        return result;
    }

    inverso(p){
        let p2 = new Pilha(this.tam);
        while(!p.isEmpty()){
            p2.push(p.top());
            p.pop();
        }
        return p2.toString();
    }

    InvertePilha(p){
        // pilha vem assim E D C B A
        let p2 = new Pilha(this.tam);
        let Base = p.top(); // guardou o E
        p.pop();


        while(!p.isEmpty()){ //passou todos os elementos para p2 = D C B A
            p2.push(p.top());
            p.pop();
        }
        
        let Topo = p2.top();
        p2.pop();
        p.push(Base); // p1 agora tem como base o E
        
        while(!p2.isEmpty()){
            p.push(p2.top());
            p2.pop();
        }// A pilha esta assim = E B C D 
        p.push(Topo) // adicionando o ultimo elemento
 
        return p.toString();
    }

    ConversorDecimal(numero){
       let resultado = numero ;
       let resto;
       let pilhaAux = new Pilha(8);
       let pilhaAux2 = new Pilha(8);

       while(resultado > 0){
            resultado = Math.floor(resultado/2);
            resto = resultado%2;
            pilhaAux.push(resto);
       }
       

       while(!pilhaAux.isEmpty()){
            pilhaAux2.push(pilhaAux.top());
            pilhaAux.pop();
        }
      
       while(!pilhaAux2.isEmpty()){
            pilhaAux.push(pilhaAux2.top());
            pilhaAux2.pop();
        }
       
    
       return pilhaAux.TextoBinario();

    }
}

export default Pilha;