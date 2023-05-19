
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
/* 
let num1 = 3 */

//num1 = num1 = 20


/* num1 += 20 */

/* num1 -= 20 */

/* num1 *= 20 */

/* num1 /= 20  */
/* console.log(num1) */



//-------Comparação

/* let num1 = 3
console.log(num1 > 0)
console.log(num1 < 0)
console.log(num1 >= 3)
console.log(num1 <= 3)

console.log(num1 === 3)
console.log(num1 !== 3) */


//São iguais em valor e tipo
/* let num1 = 1
let num2 = 1

console.log(num1 === num2) */

// São de valores iguais, mas de tipos diferentes um é uma stirng e o outro um numero 
/* let num1 = '1'
let num2 = 1

console.log(num1 === num2) */

/* 
let num1 = '2'
let num2 = 2

console.log(num1 === num2)
console.log(num1 == num2)// observa se são iguai no valor */

// Ternario

/* let driver = 190
let speed = driver > 110 ? 'Above': 'Below'

console.log( speed )  */

/* let temIdadeMinima = true
let temTituloEleitor = false

let podevotar = temIdadeMinima && temTituloEleitor
console.log( 'Pode Votar?: ' + podevotar)

let podeviajar = !podevotar
console.log('Pode VIajar?: ' + podeviajar) */

/* let corCliente = undefined
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida) */

/* let num1 = (3 + 4) * 2
console.log (num1)
 */

//If e Else este modulo devemos ver suas variações e aplicações

/* let driverSpeed = 110

if (driverSpeed > 110) {
    console.log ('Driving too fast too furious')
}

else if (driverSpeed > 40 && driverSpeed <= 110) {
    console.log ('Ok cool')
}

else
console.log(' Driving too slow like a turtle ') 
 */
//-----------Switch e Case

/* let airport = 'SEA'

switch (airport) {
    case 'MCO':
        console.log ('Orlando')
        break
    case 'JFK':
        console.log ('John F. Kennedy')
        break    
    case 'SEA':
        console.log ('Seattle')
        break
    default:
        console.log('Unknown')    
}
 */

/* print( "casa", "chuva", 1988 ); */

//------For Loop variavel dentro do for loop

/* for (i = 1; i <= 10; i++){
    console.log('Numero' , i)
} */


//-------While loop variavel fora 
/* 
i=1

while (i<=10){
    console.log('Numero ', i)
    i++
} */


//------DO WHILE LOOP


/* i = 1
do {
    console.log('Numero ', i)
    i++
} while (i<=10) */


//------For in loop

/* const myCar = {
    model: 'BMW',
    year: 2023,
    Km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])
 */



// --------For OF Loop

/*const friends = ['Fernanda', 'Laura', 'Manuela']

for (let i of friends)
    console.log(i)*/



   /* let i = 1
   while( i <= 10) {
    if( i===8 ) break
    console.log('Numero ', i )
    i++
   }
 */



//----------------------------------------------------------------------------//


//------------------------PARTE DOIS ORIENTAÇÃO A OBKETO----------------------//


//-----------------------------------------------------------------------------//




// FACTORY OBJECT

/* function createBook (title, author, pages) {
    const boock = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
            printBook: function(){
            console.log('printing...')
        }
    }
    return boock
}

const book1 = createBook('Guia Prático de Type Script' , 'Thiago da Silva Adriano' , 178)
const book2 = createBook('A Hipótese do Amor' , 'Ali Hazelwood' , 336 )

console.log(book1)
console.log(book2)
 */


/* boock.printBook() */

/* function printBook(){
    console.log('printing...')
} */


/* console.log(boock) */


//-----------ADICIONANDO PROPRIEDADES------------//

/* function createBook (title, author, pages) {
    const boock = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
            printBook: function(){
            console.log('printing...')
        }
    }
    return boock
}

const book1 = createBook('Guia Prático de Type Script' , 'Thiago da Silva Adriano' , 178)
const book2 = createBook('A Hipótese do Amor' , 'Ali Hazelwood' , 336 )

book1.color = 'white and blue'

console.log(book1)
console.log(book2) */


//------------Constructor-----------------//

/* function CreateBook (title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = new CreateBook('Guia Prático de Type Script', 'Thiago da Silva Adriano', 178)

console.log(book1) */


//------------Objetos Built in------------//

// Procurar no site  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects  //

console.log(Math.max(1, 25, 3, 77, 4, 9)) //maoir

console.log(Math.min(1, 25, 3, 77, 4, 9))  //menor

console.log(Math.round(5.3))

console.log(Math.PI) // valor de PI
