<?php

require_once("./assets/connection.php");

$name = "abdelilaadwah";
$lastname = "krodwadud";
$email = "kroud@@@gmail.com";
$password = "kroudkrodadud";

$query = "INSERT INTO users VALUES(NULL, '$name', '$lastname', '$email', '$password')";

$result = mysqli_query($connection, $query);

if($result){
    echo "user inserted";
} else {
    echo "smth went Wrong";
}
?>