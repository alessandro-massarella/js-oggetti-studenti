// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo oggetto studente
var student = {
  'nome': 'Alessandro',
  'cognome': 'Bianchi',
  'età': 18
};

// stampo a schermo tutte le proprietà tramite un FOR IN:
for (var key in student) {
  console.log(student[key]);
}