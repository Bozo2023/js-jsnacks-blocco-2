/*Ciclo For
snack 3
Crea due array che hanno un numero di elementi diversi.
 Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro */
 let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8];

for (let i = 0; i < Math.abs(array1.length - array2.length); i++) {
  if (array1.length < array2.length) {
    array1.push(Math.floor(Math.random() * 100));
  } else {
    array2.push(Math.floor(Math.random() * 100));
  }
}

console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);