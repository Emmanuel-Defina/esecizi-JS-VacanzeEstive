"use strict"


function Controlla()
{
    let Num = document.getElementById("txtNum").value;
    let h2Tabellina = document.getElementById("h2Tabellina");
    let tabellina = 0;

    h2Tabellina.innerHTML = "";

    if(Num >= 0)
         {
            for(let i = 0; i < 10; i++)
            {
                tabellina = Num * (i + 1);

                h2Tabellina.innerHTML += tabellina + " - ";
            }
         }
}
