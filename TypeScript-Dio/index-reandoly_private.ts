interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
readonly [k in keyof Cachorro]-?: Cachorro[k];

}

class meuCachorro implements Cachorro {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

}

const cao = new meuCachorro('Apolo', 14);
//cao.idade = 8;

//console.log(cao);
