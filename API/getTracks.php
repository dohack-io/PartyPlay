<?php
    //TODO: Remove this 3 lines before go live.
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

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

    //Get userID
    if ($userID = mysqli_fetch_array($conn->query('SELECT user_id FROM lobbys WHERE id = '.$lobbyID ))) {

    }else{
        echo('Fail');
        die();
    }
    //set access token
    $api->setAccessToken($accessToken[0]);


    $userPlaylists = $api->getUserPlaylists($userID[0], ['limit' => 50]);
    foreach ($userPlaylists->items as $playlist) {
        if ($playlist->name === 'PartyPlay') {
            $results = $api->getPlaylistTracks($playlist->id);
            echo json_encode($results);
            die();
        }
    }
    die('false');