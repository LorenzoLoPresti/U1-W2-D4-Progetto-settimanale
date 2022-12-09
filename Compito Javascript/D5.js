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
pets[3] = 'redfish'
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
   cars[i].licensePlate = i + 20
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

for (let i = 0; i < cars.length; i++){
  cars[i].trims.push({})
  // cars.push({})
  // break
}
console.log(cars);

console.log('\n\
-------------esercizio 6-------------\n\
-------------parte 2-----------------\n\
');

for (let i = 0; i < cars.length; i++){
  cars[i].trims.pop()
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
   let sostituzione = cars[i].trims[0]
   justTrims[i] = sostituzione
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
  if (cars[i].color.charAt() === 'b'){
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

while (numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++
}

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
    case 'g':
    numberArray[i] = 7
    break;
    case 'n':
    numberArray[i] = 14
    break;
    case 'u':
    numberArray[i] = 21
    break;
    case 'z':
    numberArray[i] = 26
    break;
    case 'd':
    numberArray[i] = 4
    break;
    default:
    break;
  }
}

console.log(numberArray);
