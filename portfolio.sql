-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 27 okt 2021 om 20:22
-- Serverversie: 10.4.21-MariaDB
-- PHP-versie: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `client`
--

CREATE TABLE `client` (
  `id` int(255) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `geboortejaar` date NOT NULL,
  `ZZP_ID` int(10) NOT NULL,
  `Telnummer_Client` int(20) NOT NULL,
  `Telnummer_OV` int(20) NOT NULL,
  `Email_OV` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `client`
--

INSERT INTO `client` (`id`, `naam`, `geboortejaar`, `ZZP_ID`, `Telnummer_Client`, `Telnummer_OV`, `Email_OV`) VALUES
(1, 'Jean Pierre', '2004-10-11', 1, 634659287, 632659876, 'Bogdann@gmail.com');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `zorg_zwaarte_pakket`
--

CREATE TABLE `zorg_zwaarte_pakket` (
  `id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `beschrijving` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `zorg_zwaarte_pakket`
--

INSERT INTO `zorg_zwaarte_pakket` (`id`, `naam`, `beschrijving`) VALUES
(1, 'niveau 4', 'Zwaar verstandelijk beperkt');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ZZP_ID` (`ZZP_ID`);

--
-- Indexen voor tabel `zorg_zwaarte_pakket`
--
ALTER TABLE `zorg_zwaarte_pakket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `client`
--
ALTER TABLE `client`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`ZZP_ID`) REFERENCES `zorg_zwaarte_pakket` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
