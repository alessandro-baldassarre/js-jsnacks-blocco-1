

const listNumber = [];

for(let i = 0; i < 6; i++){
    const userNumber = parseInt(Math.floor(prompt("inserisci un numero")));
    if((userNumber % 2) !== 0){
        listNumber.push(userNumber);
    }
}

console.log(listNumber);