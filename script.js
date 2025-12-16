document.getElementById("botaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){
    if(document.getElementById("nome").value !== "" && document.getElementById("email").value !== "" && document.getElementById("telefone").value !== ""){
        alert("Obrigada! Voce receberá novidades no seu email.");
    }else{ 
        alert("Por favor, preencha os campos de nome, email e telefone.");
    }
}
