"use strict"

let div = document.getElementById("divGriglia")
let celle = [];
let divCella = [];
let rnd = 0;

let j = 0;

let punteggio = 0;

let h2Vittoria = document.getElementById("h2Vittoria");

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

        divCella[i] = {nome : "mare", posizione : i, occupata : false};

        switch(i)
        {
            case 16:
                divCella[i] = {nome : "mare", posizione : i, occupata : true};
                break;
            case 17:
                divCella[i] = {nome : "mare", posizione : i, occupata : true};
                break;
            case 18:
                divCella[i] = {nome : "mare", posizione : i, occupata : true};
                break;
        }
    }
}

function Controlla(id)
{
let i = id.split('-')[1];

     console.log("i =", i);
    console.log("cella =", divCella[i]);

        if(divCella[i].occupata == true)
        {
           punteggio += 1;
           console.log("PUNTEGGIO =", punteggio);
        }

    if(punteggio == 3)
    {
      h2Vittoria.classList.remove("nascondi");
    }
}