<?php
$data = array();

$name = $_POST["name"];
$email = $_POST["email"];

$msg = "Nytt meddelande från akuttandvardenstockholm.se!\r\n";
$msg = $msg."Namn:".$name."\r\n";
$msg = $msg."Epost:	".$email."\r\n";

$msg = wordwrap($msg, 70);
$success = mail("95hali74@gmail.com","Meddelande från hemsidan",$msg,"From: pi@raspberrypi\r\n");

if ($success) {
  $data['success'] = true;
} else {
  $data['success'] = false;
}

echo json_encode($data);
?>
