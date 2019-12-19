function adicionarCondicionante()
{
    let condicionante = 
    {
        id: document.getElementById("idCond").value,
        nome: document.getElementById("nomeCond").value,
        tipo: document.getElementById("tipoCond").value,
        prazo: document.getElementById("dataCond").value,
        descricao: document.getElementById("descricaoCond").value,
        arquivo: null,
        status: false
    };

    if(!validate(condicionante))
        alert("Ops! Algum campo não está preenchido corretamente!");
    else
        alert("Condicionante adicionada com sucesso!");
}

function validate(condicionante)
{
    let checkedFile = document.getElementById("checkedFile").checked;
    console.log("checkedFile: " + checkedFile);
    // se o checkedFile estiver marcado e nao houver arquivo, o resultado eh false,
    // se o checkedFile nao estiver marcado, o resultado eh true
    if(checkedFile)
    {
        if(condicionante.arquivo == null)
            checkedFile = false;
    }
    else
    {
        checkedFile = true;
    }

    if(condicionante.id == "" || 
    condicionante.nome == "" ||
    condicionante.prazo == "" ||
    condicionante.descricao == "" ||
    isNaN((Number)(condicionante.id)) ||
    !checkedFile)
    {
        return false;
    }
    else
    {
        return true;
    }
}