"use strict"

let opzioni = ["Colpita" ,"Acqua"];

let v = [];

let cont = 0;

const lungV = 6;

window.onload = function () 
{
  let rnd = 0;
  let h3a = document.getElementById("h3Array");
  let h3r = document.getElementById("h3Risultato");

  for(let i = 0; i<=lungV; i++)
  {
    rnd = Math.floor(Math.random() * 2);
    v[i] = opzioni[rnd];
  }

   for(let i = 0; i<=lungV; i++)
  {
    h3a.innerHTML += "- " + v[i] + "<br>";

    if(v[i] == "Colpita")
    {
      cont++;
    }

    h3r.innerHTML = "Le navi colpite sono: " + cont;
  }

}