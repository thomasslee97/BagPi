<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');

    /*$data[] = file_get_contents("php://input");

    $inp = file_get_contents('screens.json');
    $tempArray = json_decode($inp);
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    file_put_contents('screens.json', $jsonData);*/

    file_put_contents("screens.json", file_get_contents("php://input"));
?>
