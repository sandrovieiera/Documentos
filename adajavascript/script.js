//Array parte 1
// como cria um array?
let arr = ['sandro', 35, 172, true]

console.log(arr);
// - como acessar os elementos do array
console.log('prieiro elemento:', arr[0]);
console.log('segundo elemento:', arr[1]);
console.log('terceiro elemento:', arr[2]);
console.log('quarto elemento:', arr[3]);
// - como obter o tamanho do arry
console.log('tamanho do array:', arr.length)
console.clear()
// - percorrendo array
console.clear()

for (let i = 0;i < arr.length; i++) {
    console.log(arr[i])
}
    console.clear()


    for (let elemento of arr){
        console.log(elemento)
    }


    for (let indice in arr){
        console.log(indice, arr[indice])
    }

    //array parte 2 Métodos de arrays

    let arr1 = [30, 45, 12, 34, 29]
    let arr2 = []

    // Fatiaento: slice

    console.log(arr1.slice(0, 2));
    console.log(arr1.slice(2));
    console.log(arr1.slice(0, arr1.length));

    // Adicionando elementos: push | unshift

    console.log('Antes de adicionar:', arr2)

    arr2.push(10, 20, 30)
    arr2.push(40)
    console.log('Depois de adicionar', arr2);
    console.log('Antes de adiciona com unshift:', arr2);

    arr2.unshift(0)
    console.log('Depois de adicionar com unshift:', arr2)

    
    //Removendo elementos: pop | shift

console.log('Antede remover com o pop', arr2);

const elementoReovido = arr2.pop();

console.log('Depois de remover com o pop', arr2);
console.log('O elemento removido foi', elementoReovido);

console.log('Antede remover com o shift', arr2);
arr2.shift();

console.log('Depois de remover com o shift', arr2);
console.clear()
    //Concatenando array: concat

    console.log('arr1', arr1);
    console.log('arr2', arr2);

    console.log(arr1.concat(arr2))
    console.log(arr2.concat(arr1))

    //Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2 , 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3))

console.log(arr1);

console.log(arr1.includes(10));


// Invertendo array: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)

