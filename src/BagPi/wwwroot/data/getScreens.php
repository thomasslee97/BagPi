<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    $data = file_get_contents("screens.json");
    echo json_encode($data);
?>
