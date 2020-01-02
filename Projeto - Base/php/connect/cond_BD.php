<?php
    include 'connect.php';

    class cond_BD{
        public function __construct(){

        }

        //condicionante pertence a classe condicionante();
        public function inserir($condicionante){
            //abre a conexão
            $conn = connectBD::getConnect('projeto_apoo', 'root', '');

            if ($conn != null){
                $sql = 'INSERT INTO condicionante (num_cond, nome, tipo , prazo, descricao, arq, tipo_arq, desc_arq, status) 
                VALUES (?,?,?,?,?,?,?,?,?)';
                $stmt = $conn->prepare($sql);
                $stmt->execute([
                    $condicionante->getNumCond(),
                    $condicionante->getNome(),  
                    $condicionante->getTipo(),
                    $condicionante->getPrazo(),
                    $condicionante->getDescricao(),
                    $condicionante->getArq(),
                    $condicionante->getTipoArquivo(),
                    $condicionante->getDescArquivo(),
                    $condicionante->getStatus()
                ]);

                echo $stmt->rowCount();
            }

            //fecha a conexão
            $conn = null;
        }
    }
?>