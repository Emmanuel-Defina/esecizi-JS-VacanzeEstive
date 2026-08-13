"use strict"

let div = document.getElementById("divGriglia")
let celle = [];
let divCelleConPunteggio = [];
let rnd = 0;

let j = 0;

let punteggio = 0;

let h2Punteggio = document.getElementById("h2Punteggio");

window.onload = function ()
{
    for(let i = 0; i<15; i++)
    {
        let d = document.createElement("div");
        d.classList.add("div");
        d.setAttribute("id", `div-${i}`);
        d.innerHTML = i;
        d.addEventListener("click", function(){
            ControllaSpecialità(d.id);
        })

        rnd = Math.floor(Math.random() * 2);

        if(rnd == 0)
        {
            divCelleConPunteggio[j] = d.id;
            j++;
        }

        celle[i] = d;
        div.append(d);
    }
}

function ControllaSpecialità(id)
{

    for(let i = 0; i < divCelleConPunteggio.length; i++)
    {
        if(divCelleConPunteggio[i] === id)
        {
           punteggio += 1;
            break;
        }
    }

    if(punteggio == divCelleConPunteggio.length)
    {
        alert("hai vinto!");
    }

    h2Punteggio.innerHTML = "il tuo punteggio è : " + punteggio;
}