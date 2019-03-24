<?php

/*
 *  This API use the PHP Wrapper for the Spotify API by @jwilsson
 *  Source: https://github.com/jwilsson/spotify-web-api-php/
 *
 *  EXAMPLE CONFIG FILE
 *  TODO FOR YOU: JUST EDIT THIS FILE AND RENAME IT TO CONFIG.PHP
API Help:

    Add Track
    `API/addTrack.php?id={lobby id}&track={track id}`
    Current Track
    `API/currentTrack.php?id={lobby id}`
    Get queue
    `API/getTracks.php?id={lobby id}`
    Search for Track
    `API/search.php?id={lobby id}&q={term}`
    Lobby Exists
    `API/lobbyExists.php?id={lobby id}`
 */

require 'vendor/autoload.php';

//MySQL Server Infos
$db_servername = "";  //your db server address
$db_username = ""; //your db user
$db_password = ""; //your db password
$db_name = ''; //the name of the db

//IMPORTANT:    Please be sure you have the lobbys table.
//              You don't have it? Just import the lobbys.sql
//              that you can find in the API folder.

//Spotify API Keys
$session = new SpotifyWebAPI\Session(
    '',
    '',
    ''
); // clientid, clientsecret, redirectUri of your Spotify App

//Spotify API Helper
$api = new SpotifyWebAPI\SpotifyWebAPI();


