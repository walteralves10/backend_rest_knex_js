-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13-Jun-2019 às 23:11
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



--
-- Database: `vagasemprego`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `vagas`
--

CREATE TABLE `vagas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `location` varchar(50) NOT NULL,
  `description` varchar(10000) NOT NULL,
  `full_time` varchar(6) NOT NULL,
  `empresa` varchar(50) NOT NULL,
  `url_empresa` varchar(500) NOT NULL,
  `logo_empresa` varchar(5000) NOT NULL,
  `data_criado` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `vagas`
--

INSERT INTO `vagas` (`id`, `titulo`, `location`, `description`, `full_time`, `empresa`, `url_empresa`, `logo_empresa`, `data_criado`) VALUES
(1, 'Embedded Linux Software Developer', 'Toronto GTA or remote', 'Heroic Technologies is seeking a full time embedded Linux software engineer to join our virtual engineering team, based in Canada. The Privacy Hero Adapter is a linux based adapter that encrypts Internet traffic from/to a home network. We spend most of our time working with networking, DNS, VPN and firewalls. We believe there is a new category where privacy, security and network management are separated from a router in the classic networking setup.', 'true', 'Privacy Hero', 'https://www.privacyhero.com/', 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckpwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7f2c9f7415c08b959d92f83aad9a0d960c82adad/PHLogo.png', '2019-05-13'),
(2, 'Senior PHP Developer (Research and Development)', 'Copenhagen', 'At Cobiro we\'re using machine learning and AI to build the next generation of online advertising experiences. We\'re on a mission to make online marketing easy-to-use, accessible and high-performing for everyone, and we\'re starting with Google Ads. The ideal candidate for this role has experience working as a PHP Developer with modern PHP frameworks (e.g. Laravel, Symfony or Lumen) and databases (e.g. MySQL), as well as with API’s, who is looking to take  an interesting new step in their career.', 'true', 'Cobiro ApS', 'http://www.cobiro.com', 'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckJwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a8b887c7b526e31d4d48b0277010e9660323bf9f/cobiro-logo.jpg', '2019-04-03');

--
-- Indexes for dumped tables
-- waltao meu meu 

--
-- Indexes for table `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
