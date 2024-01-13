/*Ciclo For
snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo. */
let Num= prompt("inserisci in numero");
if (Num % 2 == 0) {
    console.log(`Il numero ${Num} è pari.`);
  } else {
    console.log(`Il numero ${Num} è dispari. Il numero successivo è ${parseInt(Num) + 1}.`);
  }