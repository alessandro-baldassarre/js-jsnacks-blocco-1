
document.getElementById("btn-check").addEventListener("click", function(){

// const firstWord = prompt("Inserisci la prima parola").trim();
const firstWord = (document.getElementById("first-word").value).trim();

// const secondWord = prompt("Inserisci la seconda parola").trim();
const secondWord = (document.getElementById("second-word").value).trim();

if ( firstWord.length < secondWord.length){
    console.log(`la parola ${firstWord} è più corta di ${secondWord}`);
}
else if ( firstWord.length > secondWord.length) {
    console.log(`la parola ${secondWord} è più corta di ${firstWord}`);
}
else{
    console.log("Le due parole hanno la stessa lunghezza");
}

});



