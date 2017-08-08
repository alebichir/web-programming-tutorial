<html>
<head>
    <meta http-equiv="Refresh" content="0;url=../contacte.html">
</head>
<body>

contact added;

<?php
$contentString = file_get_contents("contacte.json");//citire fisier json ca si string
$contacte = json_decode($contentString, true);//convertirea stringului in json

$newPerson = array(
    "firstName" =>  $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" => $_GET["phone"],
    "id" => 6 //TODO create new number (auto increment)
);
//php-ul considera json si string-ul ca obiect sau array, astfel creez un nou array cu chei si valori-array de tip key-value

$contacte[] = $newPerson;//la contactele de mai sus adaug o noua persoana in memorie

$contentString = json_encode($contacte, true);//dintr-un obiect fac sa fie string
file_put_contents("contacte.json", $contentString);

header('Location: ../contacte.html');
?>

contact added (<div id="contact-id"></div>);


<script>
    var parameters = location.search.substr(1);

    var paramArray = parameters.split('&');

    console.info(paramArray);

   document.getElementById('contact-id').innerHTML =  paramArray.join("; <br>") + ";";
   // document.getElementById('contact-id').innerHTML =  paramArray.replace(/&/ig, '; <br>') + ';';

</script>

contact added ...
</body>
</html>