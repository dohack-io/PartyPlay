<?php
/**
 * Created by PhpStorm.
 * User: marco
 * Date: 2019-03-23
 * Time: 19:32
 */

require 'config.php';

    //SQL Connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

    $lobbyID = $_GET['id'];

    // Fetch the refresh token
    if ($refreshToken = mysqli_fetch_array($conn->query('SELECT refresh_token FROM lobbys WHERE ID = '.$lobbyID))) {

        $session->refreshAccessToken($refreshToken[0]);
        $accessToken = $session->getAccessToken();
        $refreshToken = $session->getRefreshToken();

        // Add new accessToken to db
        if ($conn->query('UPDATE lobbys SET access_token="'. $accessToken.'",refresh_token="'. $refreshToken.'" WHERE user_id = ' . $userID)){
            echo('true');
        }else{
            echo('false');
        }
    } else {
        echo('Fetch Refresh Token failed. Please sign in again.');
    }