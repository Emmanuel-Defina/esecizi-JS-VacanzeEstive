"use strict"

const cittaItaliane = [
  "Roma",
  "Milano",
  "Napoli",
  "Torino",
  "Palermo",
  "Genova",
  "Bologna",
  "Firenze",
  "Bari",
  "Catania",
  "Venezia",
  "Verona",
  "Messina",
  "Padova",
  "Trieste"
];

const txtRic = document.getElementById("txtRicerca");
let h3Risultato = document.getElementById("h3Risultato");

let trovato;

function cercaCittà() 
{
  let i = 0;

  trovato = false;

  do
  {
    if(cittaItaliane[i].toUpperCase() == txtRic.value.toUpperCase())
    {
      trovato = true;
      h3Risultato.innerHTML = "Città trovata in posizione " + i;
    }

    i++;
    
  }while(i < cittaItaliane.length && trovato == false)

  if(trovato == false)
  {
    h3Risultato.innerHTML = "ATTENZIONE Città non trovata";
  }
}

txtRic.addEventListener('keydown', function(event){
  if(event.key === 'Enter')
  {
    cercaCittà();
  }
})