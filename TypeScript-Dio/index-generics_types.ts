// Generic types

/*function adicionaApendiceLista<T>(array: T[], value: T) {
    return array.map(()=> valor);
    //function adicionaApendiceLista<number>(array: any[], valor: number): any[]
}

adicionaApendiceLista([1, 2, 3], 'd');*/

/*
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para áera de administração

    }
    // redirecionar para área de usuário
}
*/

//Ou com caracter "?"

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}


function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo);
    }
    // redirecionar para area do usuario
}

//Ou

