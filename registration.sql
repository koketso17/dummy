-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2020 at 08:37 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `email`, `post`) VALUES
(1, 'admin@gmail.com', 'bjhsbdvs jvhd nsd vm nmncx vjh z vjh jkvb kjbkbiuabkjbkjbakjsbvabjvbmbdsvjbjkz lvbvbvbkabjvbisabv avoihiKJBJDBVKBBVKJBKEBDVBEIUVB'),
(2, 'admin@gmail.com', 'MBZUJDBFVHSBDN VJNb jhBJHBjhbjhvnm bsmnbjbsvkjbmndsbvjkbsbv');

-- --------------------------------------------------------

--
-- Table structure for table `regdetails`
--

CREATE TABLE `regdetails` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `regdetails`
--

INSERT INTO `regdetails` (`id`, `name`, `surname`, `email`, `password`) VALUES
(1, 'admin', 'mog', 'admin@gmail.com', '12345'),
(2, 'admin 1', 'add', 'admin1@gmail.com', '12345'),
(3, 'ad', 'min', 'admin222@gmail.com', '123'),
(4, '', '', '', ''),
(6, 'mary', 'ann', 'mary@g.c', '123'),
(7, 'client', 'user', 'client@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regdetails`
--
ALTER TABLE `regdetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regdetails`
--
ALTER TABLE `regdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
