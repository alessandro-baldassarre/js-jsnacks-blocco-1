/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */

const userNumbers = prompt("Inserisci un numero di sette cifre");

let sum = 0;

for(let i=0; i < userNumbers.length; i++){

    sum+= parseInt(userNumbers.charAt(i));
}

console.log(sum);