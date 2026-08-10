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
        div.append(d);
    }
}
