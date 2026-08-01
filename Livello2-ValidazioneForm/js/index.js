"use strict"


function Controlla()
{
    let txtNome = document.getElementById("txtNome");
    let txtEmail = document.getElementById("txtEmail");
    let txtMessaggio = document.getElementById("txtMessaggio");
    let h2Att = document.getElementById("h2Attenzione");

    if(txtNome.value == "")
    {
        h2Att.innerHTML = "Attenzione, Manca il campo Nome"
    }
    else
    {
        if(txtEmail.value == "")
        {
             h2Att.innerHTML = "Attenzione, Manca il campo Email"
        }
        else
        {
            if(txtMessaggio.value == "")
            {
                 h2Att.innerHTML = "Attenzione, Manca il campo Messaggio"
            }
            else
            {
                h2Att.innerHTML = "";
            }
        }
    }
}
