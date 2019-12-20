
function adicionarCondicionante()
{
    let condicionante = 
    {
        id: document.getElementById("idCond").value,
        nome: document.getElementById("nomeCond").value,
        tipo: document.getElementById("tipoCond").value,
        prazo: document.getElementById("dataCond").value,
        descricao: document.getElementById("descricaoCond").value,
        arquivo_obrigatorio: document.getElementById("checkedFile").checked,
        tipo_arquivo: document.getElementById("formatoCond").value,
        desc_arquivo: document.getElementById("instrucoesCond").value,
        status: false
    };

    if(!validate(condicionante))
        alert("Ops! Algum campo não está preenchido corretamente!");
    else
        alert("Condicionante adicionada com sucesso!");
}

function validate(condicionante)
{ 
    if(condicionante.id == "" || 
    condicionante.nome == "" ||
    condicionante.prazo == "" ||
    condicionante.descricao == "" ||
    isNaN((Number)(condicionante.id)))
    {
        return false;
    }
    else
    {
        return true;
    }
}