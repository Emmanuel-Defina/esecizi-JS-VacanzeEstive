"use strict"

let ore = 0;
let minuti = 0;
let secondi = 60;

let i = 0;

const h2Crono = document.getElementById("timer");

const input = document.getElementById("inputUtente");

let crono;

function avvia()
{
    i = Number(input.value);
    minuti = i-1;
   crono =  setInterval(cronometro, 1000);
}

function pausa()
{
    clearInterval(crono);
}

function cronometro()
{
    secondi--;
    
    if(secondi == 0)
    {
        secondi = 59;
        minuti--;
        if(minuti == 0 && secondi == 0)
        {
           alert("Timer FINITO");
           clearInterval(crono);
        }
    }

    h2Crono.innerHTML = ore + ":" + minuti + ":" + secondi;
}