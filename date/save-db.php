<?php
include "connect-db.php";

$first_name = $_GET["firstName"];
$last_name = $_GET["lastName"];
$phone = $_GET["phone"];

if (isset($_GET["id"]) && $_GET["id"] != '') {
    $id = $_GET["id"];
    $sql = "UPDATE agenda SET first_name='$first_name',last_name='$last_name',phone='$phone' WHERE id = $id";
    $conn->query($sql);
} else {
    $sql = "INSERT INTO agenda (first_name, last_name, phone) VALUES ('$first_name', '$last_name', '$phone')";
    $conn->query($sql);
}
$conn->close();

header ('Location: ../contacte.html');
?>