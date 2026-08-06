"use strict"

let Lista = [];
let j = 0;

const txtElem = document.getElementById("txtElem");
const h3Lista = document.getElementById("h3Lista");

function AggiungiElemento()
{
    let Elemento = document.getElementById("txtElem").value;

    h3Lista.innerHTML = "";

    Lista[j] = Elemento;

    j++;
         
     for(let i = 0; i < Lista.length; i++)
    {
        h3Lista.innerHTML += "- " + Lista[i] + "<br>";
    }

    Elemento.value = "";
         
}
txtElem.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    AggiungiElemento();
  }
});
