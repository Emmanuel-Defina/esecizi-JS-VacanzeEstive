"option-strict"

let NoM = true

function MostraOnascondi()
{
    let h2 = document.getElementById("h2Contenuto");

    if(NoM == true)
    {
        h2.classList.remove("rimuovi");
        NoM = false;
    }   
    else
    {
        h2.classList.add("rimuovi");
        NoM = true;
    }     
}