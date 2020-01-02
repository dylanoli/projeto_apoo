<?php
class connectBD{

    public static function getConnect($servername, $username, $password){
        //abre conexão com o bd
        try{
            $conn = new PDO("mysql:host=localhost;dbname=$servername", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected successfully";
            return $conn; //retorna a conexão
        } catch(PDOException $e){
            echo "Connection failed: " . $e->getMessage();
            return null;
        }
    }
}
?>