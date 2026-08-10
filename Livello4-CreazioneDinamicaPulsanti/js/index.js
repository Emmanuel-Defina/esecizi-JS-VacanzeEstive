"use strict"

let div = document.getElementById("divPulsanti")

window.onload = function ()
{
    for(let i = 0; i<10; i++)
    {
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-success", "rounded-3");
        btn.setAttribute("id", `btn-${i}`);
        btn.addEventListener("click", function () {
        scriviNome(i);
        });
        btn.innerHTML = i;
        div.append(btn);
    }
}

function scriviNome(btn)
{
    alert("sono il bottone " + btn)
}
