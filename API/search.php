<?php


    require 'config.php';

    //SQL Connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

    //get the Lobby id from URL

    $lobbyID = $_GET['id'];
    if ($conn->query('SELECT * FROM lobbys WHERE id = "' . $lobbyID.'"')->num_rows > 0) {

    }else{
        echo('Fail');
        die();
    }

    if ($accessToken = mysqli_fetch_array($conn->query('SELECT ACCESS_TOKEN FROM lobbys WHERE id = '.$lobbyID ))) {

    }else{
        echo('Fail');
        die();
    }

    //set access token
    $api->setAccessToken($accessToken[0]);


    $results = $api->search($_GET['q'], 'track');
    if ($results) {
        echo json_encode($results);
    } else {
    }