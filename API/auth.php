<?php
    require 'config.php';

    //This are the scopes that we need for our web app. The user also see a info about the scopes.
    $options = [
        'scope' => [
            'playlist-modify-public',
            'playlist-read-private',
            'playlist-modify-private',
            'user-read-playback-state',
            'user-modify-playback-state'
        ],
    ];

    //Go to auth url for spotify
    header('Location: ' . $session->getAuthorizeUrl($options));
    die();