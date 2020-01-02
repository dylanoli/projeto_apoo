<?php
    include '../beans/condicionante.php';

    //criação do objeto
    $numCond = $_POST["id_cond"];
    $nome = $_POST['nomeCond'];
    $tipo = $_POST['tipoCond'];
    $prazo =  $_POST['dataCond'];
    $descricao = $_POST['descricaoCond'];
    $arq =  $_POST['checkedFile'];
    $tipo_arquivo = $_POST['formatoCond'];
    $desc_arquivo =  $_POST['instrucoesCond'];
    $status = 'pendente';
    $cond = new condicionante($numCond, $nome, $tipo, $prazo, $descricao, $arq, $tipo_arquivo, $desc_arquivo, $status);
    
    if($cond->getId() != "" || 
    $cond->getNome() != "" ||
    $cond->getPrazo() != "" ||
    $cond->getDescricao() != "" ){
        include '../connect/cond_BD.php';
        $condBD = new cond_BD();
        $condBD->inserir($cond);
    } 


?>