<?php
require 'config.php';


$options = [
    'scope' => [
        'playlist-read-private',
        'playlist-modify-private',
        'user-read-playback-state',
        'user-modify-playback-state'
    ],
];

header('Location: ' . $session->getAuthorizeUrl($options));
die();