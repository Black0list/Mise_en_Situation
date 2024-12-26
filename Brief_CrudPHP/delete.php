<?php

require_once("./assets/connection.php");

$id = 2;

$query = "DELETE FROM users WHERE ID = '$id'";

$result = mysqli_query($connection, $query);

if($result){
    echo "user deleted";
} else {
    echo "smth went Wrong";
}
?>