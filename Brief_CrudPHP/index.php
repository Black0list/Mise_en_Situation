<?php 

require_once("./assets/connection.php");

$query = "SELECT * FROM users";
$result = mysqli_query($connection, $query);


while($row = $result->fetch_assoc()){
    echo "<br>";
    echo $row["ID"];
    echo $row["firstname"];
    echo $row["lastname"];
    echo $row["email"];
    echo $row["password"];
    echo "<br>";
}
?>