<?php

require_once("./assets/connection.php");

$id = 4;
$name = "abdelilah222ggggggggggggggg";
$lastname = "kroud222gggggggggggg";
$email = "kroud@gmail.com222gggggggggggg";
$password = "kroudkroud222ggggggggggggg";

$query = "UPDATE users set firstname = '$name', lastname = '$lastname', email = '$email', password = '$password' WHERE ID = '$id' ";

$result = mysqli_query($connection, $query);

if($result){
    echo "user inserted";
} else {
    echo "smth went Wrong";
}
?>