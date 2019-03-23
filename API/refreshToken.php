<?php
/**
 * Created by PhpStorm.
 * User: marco
 * Date: 2019-03-23
 * Time: 19:32
 */

require 'config.php';

    $lobbyID = $_GET['ID'];

    if ($refreshToken = $conn->query('SELECT refresh_token FROM lobbys WHERE ID = '.$lobbyID)) {

        // Fetch the refresh token from somewhere. A database for example.
        $session->refreshAccessToken($refreshToken);
        $accessToken = $session->getAccessToken();

        // Add new accessToken to db
        $conn->query('');
    }
