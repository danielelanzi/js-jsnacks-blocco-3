// <===========================INIZIO========================>
// jsnack 4 blocco 3
// Dare la possibilità di inserire due parole. Verificare tramite
// una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.


var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');
var print = lengthWord(parola1, parola2);



function lengthWord(word1, word2) {
  var wordLength = '';
  if (word1.length == word2.length) {
    console.log('Stessa lunghezza: ' + word1 + word2);
  } else if (word1.length < word2.length) {
    console.log('la seconda parola è più lunga: ' + word2);
  } else {
    console.log('la prima parola è più lunga: ' + word1);
  }
  return wordLength
}
// <===========================FINE========================>
