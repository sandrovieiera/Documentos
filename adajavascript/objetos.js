//objetos

//como criar um objetos no javaScript?

let pessoa = {
    nome: 'sandro',
    idade: 26,

}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

//como adicionar um par chave-valor?
pessoa.altura = 1.74
console.log(pessoa);
//como remover um par chave-valor?
delete pessoa.altura
console.log(pessoa);
//como percorrer?
for (let chave in pessoa) {
    console.log(chave)
}
