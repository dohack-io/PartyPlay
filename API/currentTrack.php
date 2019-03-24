<?php

    require 'config.php';

    //SQL Connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

    //get the Lobby id from URL

    $lobbyID = $_GET['id'];
    if ($accessToken = mysqli_fetch_array($conn->query('SELECT ACCESS_TOKEN FROM lobbys WHERE id = '.$lobbyID ))) {

    }else{
        echo('Fail');
        die();
    }

    //set access token
    $api->setAccessToken($accessToken[0]);


    $results = $api->getMyCurrentTrack();
    if ($results) {
        echo json_encode($results);
    } else {
        die('false');
    }