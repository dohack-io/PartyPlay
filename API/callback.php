<?php

    //TODO: Remove this 3 lines before go live.
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require 'config.php';

    // Create Database connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Request a access token using the code from Spotify. If it is invalid then the user need to auth again...
    try {
        $session->requestAccessToken($_GET['code']);
    } catch (Exception $e) {
        echo 'You Failed: ',  $e->getMessage(), "\n";
        die();
    }

    // When DB and AccessToken is OK then continue
    $accessToken = $session->getAccessToken();
    $refreshToken = $session->getRefreshToken();


    $api->setAccessToken($accessToken);
    $userID = $api->me()->id;
    //Write infos to db
    $hostHash = '';
    if ($conn->query('SELECT * FROM lobbys WHERE user_id = "' . $userID.'"')->num_rows > 0){
        //if the user exists then update the tokens
        $conn->query('UPDATE lobbys SET access_token="'. $accessToken.'",refresh_token="'. $refreshToken.'" WHERE user_id = ' . $userID);
        $hostHash = mysqli_fetch_array($conn->query('SELECT host_hash FROM lobbys WHERE user_id = ' . $userID));
    } else {
        //if the user don't exist in the db we will generate a new md5 hash for verification.
        $hostHash = md5(uniqid(rand(), true));

        if($conn->query('INSERT INTO lobbys(host_hash, access_token, refresh_token, user_id) VALUES ("'.$hostHash.'","'.$accessToken.'","'.$refreshToken.'","'.$userID.'")') === false) {
            die("Connection failed: " . $conn->connect_error);
        }
    }

    //get valid lobbyID from DB
    $lobbyID = mysqli_fetch_array($conn->query('SELECT id FROM lobbys WHERE user_id = "' . $userID.'"'));

    //create / check Playlist in the Spotify Account
    $userPlaylists = $api->getUserPlaylists($userID, ['limit' => 50]);
    $createPlaylist = true;
    foreach ($userPlaylists->items as $playlist) {
        if ($playlist->name === 'PartyPlay') {
            $createPlaylist = false;
        }
    }
    if($createPlaylist) {
        $api->createPlaylist([
            'name' => 'PartyPlay'
        ]);
    }

    //set cookies for our Dashboard

    //user is host
    setcookie('host', '1', time() + (86400 * 30), "/");

    //host hash is a random md5 hash for validation
    setcookie('hosthash', $hostHash[0], time() + (86400 * 30), "/"); // 86400 = 1 day

    //set lobby ID as Cookie
    setcookie('lobby', $lobbyID[0], time() + (86400 * 30), "/"); // 86400 = 1 day



    // Send the user to the app!
    header('location: app');
    die();