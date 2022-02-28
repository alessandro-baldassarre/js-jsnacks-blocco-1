/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */


// accedo al primo valore inserito dall'utente attraverso il prompt trasformandolo in un numero intero
const firstNumber = parseInt(prompt("Inserisci il primo numero"));

// accedo al secondo valore inserito dall'utente attraverso il prompt trasformandolo in un numero intero
const secondNumber = parseInt(prompt("Inserisci il secondo numero"));

// eseguo una operazione di confronto tra i due numeri attraverso l'if per determinare chi è il numero maggiore
if ( firstNumber > secondNumber){
    console.log(`il primo numero ${firstNumber} è maggiore`);
}
else{
    console.log(`il secondo numero ${secondNumber} è maggiore`);
}
