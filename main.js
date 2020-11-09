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



// creo un array di oggetti di studenti
var students = [
  {
    'nome': 'Alessandro',
    'cognome': 'Bianchi',
    'età': 18
  },
  {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'età': 18
  },
  {
    'nome': 'Anna',
    'cognome': 'Lincoln',
    'età': 56
  }
];

// ciclo per stampare nome e cognome di ognuno
// for (var key in students) {
//   console.log(students[key].nome + ' ' + students[key].cognome);
// }

for (var i = 0; i < students.length; i++) {
  console.log(students[i].nome + ' ' + students[i].cognome);
}


// creo un nuovo oggetto studente 'vuoto'
var newStudent = {};

// chiedo all'utente di inserire i dati
newStudent.nome = prompt('inserisci il nome');
newStudent.cognome = prompt('inserisci il cognome');
newStudent.età = parseInt(prompt('inserisci la tua età'));

// aggiungo il nuovo oggetto studente all'array di studenti
students.push(newStudent);
// ciclo per stampare di nuovo nome e cognome di ognuno
// for (var key in students) {
//   console.log(students[key].nome + ' ' + students[key].cognome);
// }
for (var i = 0; i < students.length; i++) {
  console.log(students[i].nome + ' ' + students[i].cognome);
}
