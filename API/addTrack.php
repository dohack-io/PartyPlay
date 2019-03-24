<?php

    require 'config.php';

    //SQL Connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

    //get the Lobby id from URL

    $lobbyID = $_GET['id'];

    //Get Access Token
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


    //Example: spotify:track:5GlcAA91r5IOfPjxD6DK6q
    $playlistID = '';
    $userPlaylists = $api->getUserPlaylists($userID[0], ['limit' => 50]);
    foreach ($userPlaylists->items as $playlist) {
        if ($playlist->name === 'PartyPlay') {
            $playlistID = $playlist->id;
        }
    }
    if(!($playlistID === '')) {
        $api->addPlaylistTracks($playlistID, [$_GET['track']]);
    }