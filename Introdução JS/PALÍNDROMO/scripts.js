//solução 1
function verificaPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("gato"));


//solução 2
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    for(let i = 0; < string.length / 2; i++) {

    }
}