<html>
<head>
    <meta http-equiv="Refresh" content="5;url=../contacte.html">
</head>
<body>


<?php
$contentstring = file_get_contents("contacte.json");
$contacte = json_decode($contentstring, true);

$newperson = array(
    "firstName" =>  $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" => $_GET["phone"],
    "id" => 5
);

$contacte[] = $newperson;
$contentstring = json_encode($contacte, true);
file_put_contents("contacte.json", $contentstring);
?>


contact added (<div id="contact-id"></div>);
<script>
    var parameters = location.search.substr(1);

    var paramArray = parameters.split('&');

    console.info(paramArray);

   document.getElementById('contact-id').innerHTML =  paramArray.join("; <br>") + ";";
   // document.getElementById('contact-id').innerHTML =  paramArray.replace(/&/ig, '; <br>') + ';';

</script>
</body>
</html>