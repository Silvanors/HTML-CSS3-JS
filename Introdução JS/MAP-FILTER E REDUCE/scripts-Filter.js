/*function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];*/

//OU

/*function filtraPares2(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    });
}


const meuArray = [1, 23, 55, 67, 30, 2, 4];

//console.log(filtraPares(meuArray));
console.log(filtraPares2(meuArray));
console.log(meuArray);*/

//Números ímpares

function filtraPares2(arr) {
    return arr.filter(function(item) {
        return item % 2 !== 0;
    });
}


const meuArray = [1, 23, 55, 67, 30, 2, 4];

//console.log(filtraPares(meuArray));
console.log(filtraPares2(meuArray));
console.log(meuArray);