let distanza = prompt("Quanti kilometri deve percorrere?");
let eta = prompt("Quanti anni ha?");
let tariffaIniziale = 0.21 * distanza;

let sconto; 
if(eta<18){
        sconto = (20 * tariffaIniziale) / 100;
    }

    else if(eta>65){
        sconto = (40 * tariffaIniziale) / 100;
    }
    else{
        sconto = 0;
    }

let tariffa =  0.21 * distanza - sconto ;
const tariffaFinale = tariffa.toFixed(2);

//STAMPA
alert("Il suo biglietto costa: " + tariffaFinale + "€");
console.log("Il suo biglietto costa: " + tariffaFinale + "€");

//STAMPA IN HTML
document.getElementById("prezzo").innerHTML = tariffaFinale;