"use strict"

let div = document.getElementById("divGriglia")
let celle = [];
let divSpeciale = [];
let rnd = 0;

let b = true;

window.onload = function ()
{
    for(let i = 0; i<10; i++)
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
            divSpeciale[i] = d.id;
        }

        celle[i] = d;
        div.append(d);
    }
}

function ControllaSpecialità(id)
{
    b = false;

    for(let i = 0; i < divSpeciale.length; i++)
    {
        if(divSpeciale[i] === id)
        {
            b = true;
            break;
        }
    }

    if(b === true)
    {
        alert("La cella è speciale");
    }
    else
    {
        alert("Peccato, è una cella normale");
    }
}