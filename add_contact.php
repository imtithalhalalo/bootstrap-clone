<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO contacts(fullname, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $fullname, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>