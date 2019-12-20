<?php
class condicionante{
    private $id;
    private $num_cond;
    private $nome;
    private $tipo;
    private $prazo;
    private $descricao;
    private $arq;
    private $tipo_arquivo;
    private $desc_arquivo;
    private $status;

    public function __construct ($num_cond, $nome, $tipo, $prazo, $descricao, $arq, $tipo_arquivo, $desc_arquivo, $status){
        $this->num_cond = $num_cond;
        $this->nome = $nome;
        $this->tipo = $tipo;
        $this->prazo = $prazo;
        $this->descricao = $descricao;
        $this->arq = $arq;
        $this->tipo_arquivo = $tipo_arquivo;
        $this->desc_arquivo = $desc_arquivo;
        $this->status = $status;
    }

    //sets
    public function setNumCond($num_cond){
        $this->num_cond = $num_cond;
    }
    public function setId($id){
        $this->id = $id;
    }
    public function setNome($nome){
        $this->nome = $nome;
    }
    public function setTipo($tipo){
        $this->tipo = $tipo;
    }
    public function setPrazo($prazo){
        $this->prazo = $prazo;
    }
    public function setDescricao($descricao){
        $this->descricao = $descricao;
    }
    public function setArq($arq){
        $this->arq = $arq;
    }
    public function setTipoArquivo($tipo_arquivo){
        $this->tipo_arquivo = $tipo_arquivo;
    }
    public function setDescArquivo($desc_arquivo){
        $this->desc_arquivo = $desc_arquivo;
    }
    public function setStatus($status){
        $this->status = $status;
    }

    //gets
    public function getNumCond(){
        return $this->num_cond;
    }
    public function getId(){
        return $this->id;
    }
    public function getNome(){
        return $this->nome;
    }
    public function getTipo(){
        return $this->tipo;
    }
    public function getPrazo(){
        return $this->prazo;
    }
    public function getDescricao(){
        return $this->descricao;
    }
    public function getArq(){
        return $this->arq;
    }
    public function getTipoArquivo(){
        return $this->tipo_arquivo;
    }
    public function getDescArquivo(){
        return $this->desc_arquivo;
    }
    public function getStatus(){
        return $this->status;
    }
}
?>