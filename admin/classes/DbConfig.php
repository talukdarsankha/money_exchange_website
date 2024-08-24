<?php
  /**
   *
   */
 

  class DbConfig  {

      // protected $servername='localhost';
      // protected $username="bdexchangeworld_myuser";
      // protected $password="VZklX],4y+Dw";
      // protected $dbname="bdexchangeworld_mydata";

      protected $servername='localhost';
      protected $username="root";
      protected $password="";
      protected $dbname="bdexchangeworld_mydata";
      
    public function connect() {
        try {

          	$connection = new PDO("mysql:host=$this->servername;dbname=$this->dbname",$this->username,$this->password);

          	$connection -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

            // echo "Connected!";

            return $connection;

          } catch(PDOException $e) {

          	echo '<br>'.$e->getMessage();

          }
    }
  }
?>
