"option-strict"

let cont = 0;

function incrementa()
{
    cont += 1;

    let h2 = document.getElementById("h2Click");

    h2.innerHTML = "Hai cliccato: " + cont + " volte";
}