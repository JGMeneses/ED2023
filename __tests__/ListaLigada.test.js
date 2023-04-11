import ListaLigada from "../src/ListaLigada";

let l;

beforeEach(
    () => {
        l = new ListaLigada();
    }
);

test("A Lista recem instanciada é vazia",
    () => {
        expect(l.isEmpty()).toBe(true);
    }
);

test("Tamanho da Lista recem instanciada é zero",
    () => {
        expect(l.size()).toBe(0);
    }
);

test("Testes Diversos",
    () => {
        l.add(20);
        l.add(30);
        l.add(40);
        expect(l.isEmpty()).toBe(false);
        expect(l.size()).toBe(3);
        l.append(50);
        expect(l.size()).toBe(4);
        expect(l.asArray()).toStrictEqual([40,30,20,50]);
        l.removeFirst();
        l.removeLast();
        expect(l.asArray()).toStrictEqual([30,20]);
        expect(l.size()).toBe(2);
    }
);

