"option-strict"

function ControllaNumero()
{
    let num = document.getElementById("txtNumero").value;
    let h2 = document.getElementById("h2Risposta");

    if(num%2 == 0)
    {
        h2.innerHTML="Il Numero è Pari";
    }
    else
    {
       h2.innerHTML="Il Numero è Dispari";
    }

    h2.classList.remove("rimuovi");
}