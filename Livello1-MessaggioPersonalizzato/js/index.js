"option-strict"

function InviaMessaggio()
{
    let nome = document.getElementById("txtNome").value;
    let h2 = document.getElementById("h2Risposta");

    h2.innerHTML = "Ciao " + nome + "!"
    h2.classList.remove("rimuovi");
    
    console.log(nome);
}