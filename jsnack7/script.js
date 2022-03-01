/**
 * Creiamo un array con dieci numeri randomici
 * calcoliamo la somma di tutti gli elementi
 * e calcoliamo anche il valore medio
 */


   const numbersArray = [];

   let sum = 0;

   let average = 0;

   for(let i = 0; i < 10 ; i++ ){

    numbersArray[i]= Math.floor( Math.random() * 10);

    console.log(numbersArray[i]);

    sum+= numbersArray[i];

   }

   console.log(sum);

   average = sum / numbersArray.length;

   console.log(average);

