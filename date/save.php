<?php
$contentString = file_get_contents("contacte.json");//citire fisier json ca si string
$contacte = json_decode($contentString, true);//convertirea stringului in json

/**
 * create new number (auto increment)
 * 1. read from last.contact.id
 * 2. +1 (increment)
 * 3. use of the last incremented number
 * 4. save it in last.contact.id
 * @return int
 */
function getNextId(){
    $idString = file_get_contents("last.contact.id");
    $id = intval($idString);
    $id++;
    file_put_contents("last.contact.id", $id);
    return $id;
}

if(isset($_GET["id"]) && $_GET["id"] != ''){
    // update person
    $id = $_GET["id"];

    for($i = 0; $i < count($contacte); $i++){
        $contact = &$contacte[$i];
        if($contact["id"] == $id) {
            $contact["firstName"] = $_GET["firstName"];
            $contact["lastName"] = $_GET["lastName"];
            $contact["phone"] = $_GET["phone"];
        }
    }
} else {
    //Add person
    $id = getNextId();

    $newPerson = array(
        "firstName" =>  $_GET["firstName"],
        "lastName" => $_GET["lastName"],
        "phone" => $_GET["phone"],
        "id" => $id //  "id" => 5 create new number (autoincrement)
    );
//php-ul considera json si string-ul ca obiect sau array, astfel creez un nou array cu chei si valori-array de tip key-value

    $contacte[] = $newPerson;//la contactele de mai sus adaug o noua persoana in memorie
}


$contentString = json_encode($contacte, true);//dintr-un obiect fac sa fie string
file_put_contents("contacte.json", $contentString);

header('Location: ../contacte.html');
?>
