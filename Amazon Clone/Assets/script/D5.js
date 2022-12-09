/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log('\n\
-------------esercizio 1-------------\n\
')

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('\n\
-------------esercizio 2-------------\n\
')

pets.sort()
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log('\n\
-------------esercizio 3-------------\n\
')

pets.reverse()
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('\n\
-------------esercizio 4-------------\n\
')

pets.shift()
pets.push('redfish')
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log('\n\
-------------esercizio 5-------------\n\
');

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'AB45' + i + 'CD' //con l'operatore + i numeri vengono automaticamente convertiti in stringhe
}


console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('\n\
-------------esercizio 6-------------\n\
-------------parte 1-----------------\n\
');

   cars.push({brand : 'Bmw', model : 'X5', color: 'white', trims: ['sport', 'suv', 'style']})

console.log(cars);

console.log('\n\
-------------esercizio 6-------------\n\
-------------parte 2-----------------\n\
');

for (let i = 0; i < cars.length; i++){
  if(cars[i].trims) {
    cars[i].trims.pop()
  }
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log('\n\
-------------esercizio 7-------------\n\
')

const justTrims = []

 for (let i = 0; i < cars.length; i++) {
  if(cars[i].trims) {
    let primaProprietà = cars[i].trims[0]
    justTrims[i] = primaProprietà
  }
 };


console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('\n\
-------------esercizio 8-------------\n\
')

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color && cars[i].color.charAt() === 'b'){
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log('\n\
-------------esercizio 9-------------\n\
')

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

//nel caso in cui 32 debba essere stampato in console
while (numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++
}

// Nel caso in cui 32 non debba essere stampato in console scommentare sotto
/* 
while (numericArray[i] !== 32) {
   console.log(numericArray[i]);
   i++
}
*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('\n\
-------------esercizio 10-------------\n\
')
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const numberArray = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
    numberArray[i] = 1
    break;
    case 'b':
    numberArray[i] = 2
    break;
    case 'c':
    numberArray[i] = 3
    break;
    case 'd':
    numberArray[i] = 4
    break;
    case 'e':
    numberArray[i] = 5
    break;
    case 'f':
    numberArray[i] = 6
    break;
    case 'g':
    numberArray[i] = 7
    break;
    case 'h':
    numberArray[i] = 8
    break;
    case 'i':
    numberArray[i] = 9
    break;
    case 'j':
    numberArray[i] = 10
    break;
    case 'k':
    numberArray[i] = 11
    break;
    case 'l':
    numberArray[i] = 12
    break;
    case 'm':
    numberArray[i] = 13
    break;
    case 'n':
    numberArray[i] = 14
    break;
    case 'o':
    numberArray[i] = 15
    break;
    case 'p':
    numberArray[i] = 16
    break;
    case 'q':
    numberArray[i] = 17
    break;
    case 'r':
    numberArray[i] = 18
    break;
    case 's':
    numberArray[i] = 19
    break;
    case 't':
    numberArray[i] = 20
    break;
    case 'u':
    numberArray[i] = 21
    break;
    case 'v':
    numberArray[i] = 22
    break;
    case 'w':
    numberArray[i] = 23
    break;
    case 'x':
    numberArray[i] = 24
    break;
    case 'y':
    numberArray[i] = 25
    break;
    case 'z':
    numberArray[i] = 26
    break;
    default:
    break;
  }
}

console.log(numberArray);
