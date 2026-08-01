"option-strict"

function CambiaColore(btn)
{
    let divColore = document.getElementById("riquadro");

    switch(btn)
    {
        case "blu":
        divColore.style.backgroundColor = "blue"
            break;
        case "red":
            divColore.style.backgroundColor = "red"
            break;
        case "green":
            divColore.style.backgroundColor = "green"
            break;
        case "yellow":
            divColore.style.backgroundColor = "yellow"
            break;   
    }
}