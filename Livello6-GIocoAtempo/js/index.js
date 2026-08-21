"use strict"

let div = document.getElementById("divGriglia")
let celle = [];
let divCella = [];
let rnd = 0;

let j = 0;

let punteggio = 0;

let h2Vittoria = document.getElementById("h2Vittoria");

let gioca;

let crono;

let secondi = 30;

window.onload = function ()
{
    console.log("ONLOAD PARTITO");

    for(let i = 0; i<20; i++)
    {
        let d = document.createElement("div");
        d.classList.add("div");
        d.setAttribute("id", `div-${i}`);
        d.innerHTML = i;
        d.addEventListener("click", function(){
             console.log("Ho cliccato", d.id);
            Controlla(d.id);
        })
        celle[i] = d;
        div.append(d);

        divCella[i] = {nome : "mare", posizione : i, occupata : false, premuta : false};

        rnd = Math.floor(Math.random() * 2);

        if(rnd == 1 && punteggio <=3)
        {
            divCella[i] = {nome : "mare", posizione : i, occupata : true, premuta : false};
            punteggio ++;
        }
    }

    let btnGioca = document.createElement("button");
    btnGioca.id = "btnGioca"
    btnGioca.classList.add("btn", "btn-success", "mt-4", "ms-4");
    btnGioca.onclick = gioco;
    btnGioca.innerText = "Avvia Il Gioco";
    document.body.append(btnGioca);

    punteggio = 0;
}

function gioco ()
{
    gioca = true;
    secondi = 30
    punteggio = 0;
    crono = setInterval(cronometro, 1000);
}

function Controlla(id)
{
    let i = id.split('-')[1];
    let c = document.getElementById(id);

    console.log("i =", i);
    console.log("cella =", divCella[i]);

    if(divCella[i].occupata == true && divCella[i].premuta == false && gioca == true)
    {
        punteggio += 1;
        console.log("PUNTEGGIO =", punteggio);
    }
    
    divCella[i].premuta = true;

    if(punteggio == 3)
    {
      h2Vittoria.innerText = "HAI VINTO";
      h2Vittoria.classList.remove("nascondi");
      clearInterval(crono);
    }
    
}

function cronometro ()
{
    let h3Crono = document.getElementById("h3Cronometro");

    secondi--;
    h3Crono.innerText = "0:0:" + secondi;

    if(secondi == 0)
    {
        gioca = false;
        h2Vittoria.innerText = "HAI PERSO, TEMPO SCADUTO";
        h2Vittoria.classList.remove("nascondi");
        clearInterval(crono);
    }

   
}