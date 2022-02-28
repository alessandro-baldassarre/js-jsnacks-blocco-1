
/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */


const listNumber = [];

for(let i = 0; i < 6; i++){
    const userNumber = parseInt(Math.floor(prompt("inserisci un numero")));
    if((userNumber % 2) !== 0){
        listNumber.push(userNumber);
    }
}

console.log(listNumber);