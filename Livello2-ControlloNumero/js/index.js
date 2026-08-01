"option-strict"

function ControllaNumero()
{
    let num = document.getElementById("txtNumero").value;
    let h2 = document.getElementById("h2Risposta");

    if(num > 0)
    {
        h2.innerHTML="Il Numero è positivo";
    }
    else
    {
        if(num == 0)
        {
            h2.innerHTML="Il Numero è Uguale a 0";
        }
        else
        {
             h2.innerHTML="Il Numero è Negativo";
        }
    }

    h2.classList.remove("rimuovi");
}