

const userNumbers = prompt("Inserisci un numero di sette cifre");

let sum = 0;

for(let i=0; i < userNumbers.length; i++){

    sum+= parseInt(userNumbers.charAt(i));
}

console.log(sum);