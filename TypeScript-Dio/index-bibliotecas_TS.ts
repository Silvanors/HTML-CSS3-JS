/*interface Estudante {
    nome: string;
    idade: number;

}

interface Estudante {
    serie: string;
}

const estudante: Estudante = {
  
   }     
}*/

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();