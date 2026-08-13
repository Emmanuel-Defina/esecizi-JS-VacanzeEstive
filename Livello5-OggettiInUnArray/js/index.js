"use strict"

let v = [
    {
        nome : "nave1",
        posizione : 4,
        stato : false
    },
    {
        nome : "nave2",
        posizione : 9,
        stato : false
    },
    {
        nome : "nave3",
        posizione : 2,
        stato : false
    }
]

let h2Ogg = document.getElementById("h2Oggetti");
let inputPosizione = document.getElementById("inputPosizione");
let risultato = document.getElementById("risultato");

window.onload = function()
{
    fIniziale();
}

function fIniziale()
{
    h2Ogg.innerHTML = "";

    for(let i = 0; i < v.length; i++)
    {
        h2Ogg.innerHTML += "nome: " + v[i].nome +
                           " | stato: " + v[i].stato + "<br>";
    }
}

function fTrova()
{
    let posizioneInserita = Number(inputPosizione.value);

    for(let i = 0; i < v.length; i++)
    {
        if(v[i].posizione == posizioneInserita)
        {
            v[i].stato = true;

            risultato.innerHTML = v[i].nome + " trovata!";

            fIniziale();

            return;
        }
    }

    risultato.innerHTML = "Nessun elemento trovato.";
}