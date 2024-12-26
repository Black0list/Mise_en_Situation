<?php

$servername = "localhost";
$db_name = "user_management";
$user = "root";
$password = "";


$connection = mysqli_connect($servername, $user, $password, $db_name);

if($connection){
    echo "Connected";
} else {
    echo "not connected";
}



?>