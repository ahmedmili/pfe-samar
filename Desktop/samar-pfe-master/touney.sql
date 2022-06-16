-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 16 juin 2022 à 17:15
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `touney`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id_admin` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id_admin`, `fullname`, `email`, `password`) VALUES
(1, 'chourabi taher', 'tchourabi@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Structure de la table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maps` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `region_id` int(11) DEFAULT NULL,
  `state` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `partners`
--

INSERT INTO `partners` (`id`, `name`, `logo_url`, `phone`, `email`, `website`, `maps`, `about`, `region_id`, `state`) VALUES
(6, 'Dar El Jeld Hotel & Spa', 'https://media-cdn.tripadvisor.com/media/photo-s/16/33/73/77/dar-el-jeld-hotel-spa.jpg', '(+216) 70 01 61 90', 'Contact@dareljeld.com', 'https://www.dareljeld.com/en/', 'https://www.google.tn/maps/place/Dar+El+Jeld/@36.7985498,10.1669709,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd338a93f34dc1:0xbafd9de9e9ed0277!8m2!3d36.7985865!4d10.169155?hl=fr', 'Get the celebrity treatment with world-class service at Dar El Jeld Hotel and Spa\r\nYou\'re eligible for a Genius discount at Dar El Jeld Hotel and Spa! To save at this property, all you have to do is sign in.\r\n\r\nDar El Jeld Hotel and Spa has a restaurant, seasonal outdoor swimming pool, a bar and garden in Tunis. A Turkish bath and a car rental service are available for guests. The property has a 24-hour front desk, room service and currency exchange for guests.\r\n\r\nAll rooms at the hotel come with air conditioning, a seating area, a flat-screen TV with satellite channels, a safety deposit box and a private bathroom with a shower, bathrobes and slippers. Dar El Jeld Hotel and Spa provides some rooms that feature a balcony, and the rooms include an electric tea pot. At the accommodation the rooms are equipped with bed linen and towels.\r\n\r\nGuests at Dar El Jeld Hotel and Spa can enjoy a continental or a à la carte breakfast.\r\n\r\nThe hotel has a sun terrace.\r\n\r\nFor business travellers\' convenience, meeting and banquet facilities, a business center and a fax machine and photocopier are available.\r\n\r\nDar Lasram Museum is a 16-minute walk from Dar El Jeld Hotel and Spa, while Sidi Mahrez Mosque is 1.9 km from the property. The nearest airport is Tunis, 11.3 km from the accommodation, and the property offers a paid airport shuttle service.\r\n\r\nCouples in particular like the location – they rated it 9.5 for a two-person trip.', 1, b'1');

-- --------------------------------------------------------

--
-- Structure de la table `regions`
--

CREATE TABLE `regions` (
  `id_region` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `regions`
--

INSERT INTO `regions` (`id_region`, `label`) VALUES
(1, 'Tunis'),
(2, 'Sousse'),
(3, 'Nabeul'),
(4, 'Bizerte');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `fullname`, `lastName`, `password`, `id`) VALUES
('tchourabi@gmail.com', 'taher', 'chourabi', '123456789', 1),
('samar@gmail.com', 'samar', 'aouadi', '123456', 5),
('ninja@gmail.com', 'taher', 'chourabi', '123456789', 6),
('ahmedmili76@gmail.com', 'ahmed', 'mili', '123456789', 7);

-- --------------------------------------------------------

--
-- Structure de la table `users_calandar`
--

CREATE TABLE `users_calandar` (
  `id_prog` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `partner_id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `heure` varchar(255) NOT NULL,
  `more` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users_calandar`
--

INSERT INTO `users_calandar` (`id_prog`, `user_id`, `partner_id`, `date`, `heure`, `more`) VALUES
(4, 1, 6, '2022-05-31', '15:18', 'je doit preparer mon valise'),
(5, 7, 6, '2021-10-10', '10:10', 'bla bla bla');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id_region`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_calandar`
--
ALTER TABLE `users_calandar`
  ADD PRIMARY KEY (`id_prog`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `regions`
--
ALTER TABLE `regions`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `users_calandar`
--
ALTER TABLE `users_calandar`
  MODIFY `id_prog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
