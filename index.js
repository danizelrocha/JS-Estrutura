
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


//------------------------PARTE DOIS ORIENTAÇÃO A OBJETO----------------------//


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

/* console.log(Math.max(1, 25, 3, 77, 4, 9)) //maoir

console.log(Math.min(1, 25, 3, 77, 4, 9))  //menor

console.log(Math.round(5.3))

console.log(Math.PI) // valor de PI */


//------------STRING---------//

/* let message = 'Hey, my name is Daniel'

console.log(message.startsWith('Hey'))

console.log(message.length)

console.log(message.endsWith('Daniel'))

console.log(message.slice()) */





// -----------Utilizabdo Templte literal--------//

/* const email = 'Hi Laura,\nThe meeting is confirmed! \nManuela'
const email1 = `Hi Laura, 
The meeting is confirmed! 
Manuela`


let firstName ='Laura'

const email2 = 'Hi ' + firstName + ',\nThe meeting is confirmed! \nManuela'
const email3 = `Hi ${firstName}, 
The meeting is confirmed! 
Manuela`


console.log(email)
console.log(email1)
console.log(email2)
console.log(email3) */











//---------------------------------------//

//-----------------DIA 4-----------------//

//--------------------------------------//


//     Arrays      //


/* let friends = ['Manu', 'Laura', 'Fernanda']

friends[1] = 'Daniel'

console.log(friends) */


// Adição a Arrays  //

/* const num = [7, 9, 22, 13, 11, 17]

num.push(100, 200, 300) // final

num.unshift(1, 365, 46589) //inicio

num.splice(1, 0, 2, 3, 4, 5, 6) // onde inicia, quantos quero deletar e o que vou adicionar.

console.log(num) */


// Localizando a posição de itens em uma Arrays //

/* const num = [6, 7, 8, 9]

console.log(num.indexOf(8))

console.log(num.indexOf(4))

console.log(num.includes(8))

console.log(num.includes(4)) */


// Localizando itens em uma Arrays de referencia //


/* const movies = [
    {id: 1, movieName: 'Conan'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'},
    {id: 4, movieName: 'The Conjuring'},
    {id: 5, movieName: 'The Super Mario Bros'}
]

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))   // find só funciona como uma função veja o exemplo// */


// Arrow Function //

/* const movies = [
    {id: 1, movieName: 'Conan'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'},
    {id: 4, movieName: 'The Conjuring'},
    {id: 5, movieName: 'The Super Mario Bros'},
    {id: 6, movieName: 'Tales From The Loop'}
]

console.log(movies.find(movie => movie.movieName == 'The Matrix')) // usando uma arrow vc simplifica o codgo . */
    




//   Removendo Itens da Arrays    //

/* const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const final = num.pop() //remove o ultimo
const final1 = num.shift() //remove o primeiro
const final2 = num.splice(2, 2) //apartir do index 3 remova 1 item

console.log(num)
console.log(final)
console.log(final1)
console.log(final2) */




// Esvaziando uma Array  //

/* 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* num = [] */ // uma forma

/* num.length = 0 // outra forma */

/* num.splice(0, num.length)

console.log(num)  */


//   Concatenando Array   //


/* let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c', 'd']

all = numbers.concat(letters)
half = all.slice(3, 5) // retira do ponto e a quantidade de informação.

console.log(all)
console.log(half)
 */


// Join Array //...


/* let clients = ['Daniel', 'Laura', 'Manuela', 'Fernanda']

console.log(clients)

let clientsJoin = clients.join(', ') //serve para adicionar algo que queira a Array

console.log(clientsJoin) */




//   Revertendo a Array  //

//let clients = ['Daniel', 'Laura', 'Manuela', 'Fernanda']

//clients.sort() // organiza em ordem alfabetica
//clients.reverse() //organiza em ordem reversa

//console.log(clients)


// Verificando elementos na array - checar itens dentro de uma array com fase ou true. usando every

/* const tempLondon =[18, 13, 8, 2]

const tempPositive = tempLondon.every(function(value){
    return value >= 0
})
 */
//console.log(tempPositive)


// Filtrando uma Array usando o filter  //


/* const tempLondon =[18, -13, 8, -2, 38, -49, 1, 0, -2, 50, 89, -427, -99, 39, -1, -40]

const tempPositive = tempLondon.filter(value => value >= 0)
const tempNegative = tempLondon.filter(value => value < 0)

console.log(tempPositive)
console.log(tempNegative) */






  //---------------------------------------//
 //- - - - - - - - Dia 6 - - - - - - - - -//
//---------------------------------------//
    //  FUNCTION DECLARETION   //

/* function movie () {
    console.log('Tales From The Loop')
}
    movie()


  // Function Expression  //
  
  const car = function() {
    console.log('Gurgel')
  }

  car()

  const truck = car

  truck() */



  //--------------Hoisting-----------//


  //----Fuction Declaretion------//
/*   movie()

  function movie () {
    console.log('Tales From The Loop')
}

  // Function Expression  //
  
  const car = function() {
    console.log('Gurgel')
  }

  car()
  const truck = car
  truck()  */


  //-----Argumentos em fuções----//
/* 
  function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
  }

  console.log(price(10, 20, 30, 40)) */



  //--Configurando Parametros Default---// --- sem argumento---//

  function carLoan(loan, rate, years) {
    return (loan * rate / 100 * years) + loan
  }

  console.log(carLoan(20000, 2.5, 5)) // Média internacional de juros
  console.log(carLoan(20000, 17, 5)) // Média Brasileira de juros




  // Aplicando Default argumentos que não mudam aplicamos o Default //  ----com argumento---//

  function carLoan(loan, rate = 2.9, years = 5) {
    return (loan * rate / 100 * years) + loan
  }

  console.log(carLoan(20000)) // Média internacional de juros
  