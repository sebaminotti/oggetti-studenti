$(document).ready(function(){

/**
 * Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà
 */
var studente = {
'nome':'marco',
'cognome':'rossi',
'eta':38
}
for(var key in studente){
    console.log(key+':'+studente[key]);
}

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++');
/**
 * Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
 */

var listaStudenti = [
{
'nome':'sebastiano',
'cognome':'minotti',
'eta':38
},

{
    'nome':'elisa',
    'cognome':'vercesi',
    'eta':32
},

{
    'nome':'elisa',
    'cognome':'curcio',
    'eta':68
},

{
    'nome':'franco',
    'cognome':'barbarini',
    'eta':70
}

]

document.getElementById('lista').innerHTML  = JSON.stringify(listaStudenti);

for(var i = 0; i < listaStudenti.length;i++){

console.log(listaStudenti[i].nome+':'+ listaStudenti[i].cognome);
}

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');


/**
 * Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età
 */

$('#aggiungi').click(function(){
var nuovoStudente = {
'nome':'',
'cognome':'',
'eta':'',
}

var nome = document.getElementById('nome').value
var cognome =  document.getElementById('cognome').value
var age =  document.getElementById('eta').value

nuovoStudente.nome = nome // prompt('inserisci il nome')
nuovoStudente.cognome = cognome //prompt('inserisci il cognome')
nuovoStudente.eta = age //Number(prompt('inserisci la tua età')) 

console.log(nuovoStudente);


listaStudenti.push(nuovoStudente)
console.log(listaStudenti);

document.getElementById('listanuova').innerHTML  = JSON.stringify(listaStudenti);

})

})