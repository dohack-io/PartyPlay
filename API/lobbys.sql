-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 24. Mrz 2019 um 10:50
-- Server-Version: 10.2.22-MariaDB-log-cll-lve
-- PHP-Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `patchnot_partyplay`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `lobbys`
--

CREATE TABLE `lobbys` (
  `id` int(5) NOT NULL,
  `host_hash` text NOT NULL,
  `access_token` text NOT NULL,
  `refresh_token` text NOT NULL,
  `user_id` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `lobbys`
--

INSERT INTO `lobbys` (`id`, `host_hash`, `access_token`, `refresh_token`, `user_id`) VALUES
(10000, 'init', 'init', 'init', '');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `lobbys`
--
ALTER TABLE `lobbys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `lobbys`
--
ALTER TABLE `lobbys`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10020;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
