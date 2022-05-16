<?php

    include_once("database.php");

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    if (isset($postdata) && !empty($postdata))
    {
        $pwd = mysqli_real_escape_string($mysqli, trim($request -> password));
        $email = mysqli_real_escape_string($mysqli, trim($request -> username));
        $sql = "SELECT * FROM users where email='$email' and password='$pwd'";

        if ($result = mysqli_query($mysqli, $sql))
        {
            $rows = array();
            while ($rows = mysqli_fetch_assoc($result))
            {
                $rows[] = $row;
            }
            echo json_decode($rows);
        }
        else
        {
            http_response_code(404);
        }
    }

?>