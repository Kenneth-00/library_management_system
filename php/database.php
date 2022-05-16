<?php

header("Access-Control-Allow-origin: http://localhost:80/LMS/php");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");
header("Control-Type: application/json; charset-UTF-8");
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'librarydb';

$mysqli = new msqli($db_host, $db_username, $db_password, $db_name);

if ($mysqli -> connect_error) {
    die ('Error : ('. $mysqli -> connect_errno . ')' . $mysqli -> connect_error);
}

?>