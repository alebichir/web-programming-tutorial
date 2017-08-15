<?php

include "connect-db.php";

$servername = "localhost"; //pot pune numele altul calculator
$username = "root";
$password = "";
$dbname = "web_dev_1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM agenda";
$result = $conn->query($sql);

$contacte = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "id: " . $row["id"]. " - first name: " . $row["first_name"]. " -last name: " . $row["last_name"]. " -phone: " . $row["phone"]."<br>";
        $contacte[] = array(
            "id" => $row["id"],
            "firstName" => $row["first_name"],
            "lastName" => $row["last_name"],
            "phone" => $row["phone"]
        );
    }
}
$conn->close();

echo json_encode($contacte, true);

?>