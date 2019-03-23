<?php
/**
 * Created by PhpStorm.
 * User: marco
 * Date: 2019-03-23
 * Time: 13:52
 */
    require 'config.php';


    //SQL Connection
    $conn = new mysqli($db_servername, $db_username, $db_password, $db_name);

    //get the Lobby id from URL

    $lobbyID = $_GET['id'];
    if ($accessToken = $conn->query('SELECT ACCESS_TOKEN FROM lobbys WHERE ID = '.$lobbyID )) {

    }else{
        echo('I DIED');
        die();
    }

    $api->setAccessToken($lobbyID);

    $results = $api->search($_GET['q'], 'track');
    echo json_encode($results);

    //foreach ($results->tracks->items as $tracks) {
    //    $previewImage = $tracks->album->images[2]->url;
    //    print_r('<img src="'. $previewImage .'" />');
    //    echo $tracks->name, '<br>';
    //}