"option-strict"

let num = 0;

window.onload = function()
{
    num = Math.floor(Math.random () * 101);
    console.log(num);
}

function ControllaNumero()
{
    let num2 = document.getElementById("txtNumero").value;
    let h2 = document.getElementById("h2Risposta");

    if(num2 == num)
    {
        h2.innerHTML="HAI VINTO";
    }
    else
    {
        if(num2 < num)
        {
            h2.innerHTML="Il Numero è troppo piccolo";
        }
        else
        {
            h2.innerHTML="Il Numero è troppo grande";
        }
       
    }

    h2.classList.remove("rimuovi");
}