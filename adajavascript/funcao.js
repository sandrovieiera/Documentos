// Funções

function saudacao() {
    console.log('Ola seja bem-vindo(o) ao nosso curso de javascript');
}

saudacao()
console.clear()
// Como enviar parametros para as funções

function saudacao(nome, curso='javascript') {
    console.log(`Ola, ${nome}! seja bem-vindo(o) ao nosso curso de ${curso}!`);
}

saudacao('sandro')


// Retorno da função 

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado)

function maiorDoQue50(numero) {
    if (numero > 50) {
        
        return true
    }

    return false
}

let novo = maiorDoQue50(45)

console.log(novo)