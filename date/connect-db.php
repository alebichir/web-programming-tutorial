<?php
$servername = "localhost"; //pot pune numele altui calculator
$username = "root";
$password = "";
$dbname = "web_dev_1";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
