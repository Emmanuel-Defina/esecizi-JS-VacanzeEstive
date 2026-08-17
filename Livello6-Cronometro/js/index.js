"use strict"

let ore = 0;
let minuti = 0;
let secondi = 0;

const h2Crono = document.getElementById("timer");


let crono;

function avvia()
{
   crono =  setInterval(cronometro, 1000);
}

function azzera()
{
    clearInterval(crono);
    secondi = 0;
    minuti = 0;
    ore = 0;

    h2Crono.innerHTML = ore + ":" + minuti + ":" + secondi;
}

function pausa()
{
    clearInterval(crono);
}

function cronometro()
{
    secondi++;
    
    if(secondi == 60)
    {
        secondi = 0;
        minuti++;
        if(minuti == 60)
        {
            minuti = 0;
            ore++;
        }
    }

    h2Crono.innerHTML = ore + ":" + minuti + ":" + secondi;
}