

//types
//interface

/*interface IAnimal {
    nome: string;
    tipo:'terresetre' | 'aquático';
    domestico: boolean;
    
}


interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' |'grande';

}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    domestico: true,
    nome: 'cachorro',
    porte:'medio',
    tipo: 'terresetre',
    visaoNoturna: true,
}



const felino: IFelino = {
    nome: 'leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}*/


const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
const i = event.currentTarget as HTMLInputElement;
console.log(i.value);

//    console.log(event.currentTarget.)
});
    
