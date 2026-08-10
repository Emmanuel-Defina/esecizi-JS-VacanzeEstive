"use strict"

let div = document.getElementById("divGriglia")

window.onload = function ()
{
    for(let i = 0; i<10; i++)
    {
        let d = document.createElement("div");
        d.classList.add("div");
        d.setAttribute("id", `div-${i}`);
        d.innerHTML = i;
        d.addEventListener("click", function(){
            cambiaColore(d.id);
        })
        div.append(d);
    }
}

function cambiaColore(id)
{
    let d = document.getElementById(id);
    d.classList.add("rosso");
}
