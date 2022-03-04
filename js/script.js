console.log('JS OK');

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

// Recupero informazioni dal viaggiatore

const numeroKm = prompt('Inserisci il numero dei km da percorrere');
const eta = prompt('Inserisci la tua età');

console.log('Numero km inseriti ', numeroKm);
console.log('Età inserita ', eta);

document.getElementById('numeroKm').innerHTML = 'Il numero dei km inseriti è: ' + numeroKm + ' km';
document.getElementById('eta').innerHTML = 'La tua età è: ' + eta + ' anni';

// Calcolo il prezzo totale del biglietto

const kmPrice = 0.21
const prezzoBiglietti = (kmPrice * numeroKm);
const prezzoDecimale = prezzoBiglietti.toFixed(2);

const discount20 = 0.2
const discount40 = 0.4

const prezzoScontatoMinorenni = (prezzoDecimale - (prezzoDecimale * discount20)).toFixed(2);
const prezzoScontatoAnziani = (prezzoDecimale - (prezzoDecimale * discount40)).toFixed(2);

if (eta < 18) {

    console.log('Pezzo biglietto minorenni ', prezzoScontatoMinorenni);
    document.getElementById('totalPrice').innerHTML = 'Il prezzo del tuo biglietto è: ' + prezzoScontatoMinorenni + ' €';

} else if (eta >= 65) {

    console.log('Prezzo biglietto anziani ', prezzoScontatoAnziani);
    document.getElementById('totalPrice').innerHTML = 'Il prezzo del tuo biglietto è: ' + prezzoScontatoAnziani + ' €';

} else {

    console.log('Prezzo del biglietto è: ', prezzoDecimale);
    document.getElementById('totalPrice').innerHTML = 'Il prezzo del tuo biglietto è: ' + prezzoDecimale + ' €';

}


