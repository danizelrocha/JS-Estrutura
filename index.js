
// Aula 1 let - hoje se usa let no lugar de var
/* console.log('Javascript Funcionando');

let firstName ='Daniel';
let lastName = 'Rocha';
let sexo = 'Masculino';
let cor = 'Branco';
let time = 'São Paulo';
console.log(firstName);
console.log(lastName);
console.log(sexo);
console.log(cor);
console.log(time); */

// Aula 2 const não é ubistituida por ser considerada principal tem um peso maior que let 

/* const price = 30;
// price = 20;
console.log(price); */

// aula 3 ASI - automatic semicolon insertion - ponto evirgula o  dosi pontosque usar?

/* let Name = 'Laura'
console.log(Name) */

// aula 3 tipos de variavei

//--Primitivas--|--Referencia--
//string        | Objects
//numero        | Array
//undefined     | Function
//null          |

// Primitivas
/* let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'Red' */
/* itemName = null

console.log(itemColor)

// Referenciais

let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'Red' */


// objeto
/* let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
} */
/* console.log(pen)

//alterar propetis ou itens

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue' */

// Array 

/* let friends = ['Marcos', 'Silvia', 'Elisa']
friends[2] = 'Junior'
console.log (friends) */

/* function saleStatus (status, total) {
    console.log (' Transaction' + status + '! Total amount: $ ' + total)
}
saleStatus(' Apptoved' , 30) */





// função  porcentagem         exemplo price = 20    price - (price - 10/ 100)  20 - (20 *10 / 100) = 20

/* function percentage10(price) {
    return price - (price * 10/ 100)
}
console.log(percentage10(40)) */

//simples

/*
let num1 = 3
let num2 = 2

console.log(num1 + num2)

let num1 = 3
let num2 = 2

console.log(num1 - num2)

let num1 = 3
let num2 = 2

console.log(num1 * num2) 
*/

/* let num1 = 3
let num2 = 2

console.log(num1 / num2) */
/* 
let num1 = 3
let num2 = 2

console.log(num1 % num2) */ // o simbolo de procentagem trabalha com o resto da divisão 


/* let num1 = 3
let num2 = 2

console.log(num1 ** num2) */ //o ** trabalha com exponencial sendo pelo 
                         // exemplo 3*3 =9 já que o 2 virou o exponencial de 3

                         
/*
----------Operadores de---------- 
encremento são representados pelos operadores : ++
decremento são representados pelos operadores : --
*/


/* let num1 = 3
let num2 = 2

let total = num1 + num2
                         
console.log(++total) // soma mais 1, e mostar
console.log(total)

let num1 = 3
let num2 = 2

let total = num1 + num2
                         
console.log(total++) // soma mais 1, mas não mostra.
console.log(total)
                         

let num1 = 3
let num2 = 2

let total = num1 + num2
                         
console.log(--total) //subitrai 1, e mostra 
console.log(total)

let num1 = 3
let num2 = 2

let total = num1 + num2
                         
console.log(total--) // subitrai 1, e não mostra
console.log(total)
*/

//Atribuição

let num1 = 3

//num1 = num1 = 20
num1 += 20

num1 -= 20

num1 *= 20

num1 /= 20
console.log(num1)
