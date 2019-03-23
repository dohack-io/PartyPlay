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

    //Write infos to db

    if ($results = $conn->query('SELECT * FROM lobbys WHERE oauth = "' . $accessToken.'"')){
        //User gibbet bereits

    } else {

        //if the user don't exist in the db we will generate a new md5 hash for verification.
        $hostHash = md5(uniqid(rand(), true));

        if($conn->query('INSERT INTO lobbys(host_hash, access_token, refresh_token) VALUES ("'.$hostHash.'","'.$accessToken.'","'.$refreshToken.'")') === false) {
            die("Connection failed: " . $conn->connect_error);
        }
    }

    //set cookies for our Dashboard

    //user is host
    setcookie('host', '1', time() + (86400 * 30), "/");

    //host hash is a random md5 hash for validation
    setcookie('hosthash', '1', time() + (86400 * 30), "/"); // 86400 = 1 day

    //set lobby ID as Cookie
    setcookie('lobby', '1', time() + (86400 * 30), "/"); // 86400 = 1 day


    // Store the access and refresh tokens somewhere. In a database for example.



    // Send the user along and fetch some data!
    header('Location: app.php');
    die();