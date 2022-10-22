-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 22, 2022 at 04:31 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intranusa`
--

-- --------------------------------------------------------

--
-- Table structure for table `Cctv`
--

CREATE TABLE `Cctv` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `specifikasi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Cctv`
--

INSERT INTO `Cctv` (`id`, `judul`, `harga`, `specifikasi`, `createdAt`, `updatedAt`) VALUES
(36, '4 KAMERA 2 MP', 3, '1 Outdoor HD 2MP\n1 Indoor HD 2MP\n1 DVR 4 Channel\n1 HDD 250 GB\n2 Unit Adaptor', '2022-10-11 05:31:24', '2022-10-11 05:31:24'),
(38, 'IP CAM', 4, '1 Outdoor HD 2MP\n1 Indoor HD 2MP\n1 DVR 4 Channel\n1 HDD 250 GB\n2 Unit Adaptor', '2022-10-11 05:32:31', '2022-10-11 05:32:31'),
(39, 'Paket Hemat', 1, '1 Outdoor HD 2MP\n1 Indoor HD 2MP\n1 DVR 4 Channel\n1 HDD 250 GB\n2 Unit Adaptor', '2022-10-11 05:32:57', '2022-10-11 05:32:57'),
(40, 'IP CAM 2', 2, 'awdawda', '2022-10-11 05:54:49', '2022-10-11 05:54:49'),
(42, '8 Kamera 2mp', 4, 'wadawd', '2022-10-12 03:24:14', '2022-10-12 03:24:14'),
(43, '5 Kamera 4mp', 3, '1 Outdoor HD 2MP 1 Indoor HD 2MP 1 DVR 4 Channel 1 HDD 250 GB 2 Unit Adaptor	\n', '2022-10-12 03:25:35', '2022-10-12 03:25:35'),
(44, 'IP CAM ', 5, '1 Outdoor HD 2MP 1 Indoor HD 2MP 1 DVR 4 Channel 1 HDD 250 GB 2 Unit Adaptor	\n', '2022-10-12 03:26:10', '2022-10-12 03:26:10'),
(45, '3 Kamera 5mp', 4, '1 Outdoor HD 2MP 1 Indoor HD 2MP 1 DVR 4 Channel 1 HDD 250 GB 2 Unit Adaptor	\n', '2022-10-12 03:26:47', '2022-10-12 03:26:47');

-- --------------------------------------------------------

--
-- Table structure for table `itsolution`
--

CREATE TABLE `itsolution` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `itsolution`
--

INSERT INTO `itsolution` (`id`, `judul`, `keterangan`, `createdAt`, `updatedAt`) VALUES
(13, 'IT SUPPORT', 'fwefwefqw', '2022-10-11 05:41:28', '2022-10-11 05:41:28'),
(17, 'IT CONSULTAN', 'asdasdas', '2022-10-12 03:37:52', '2022-10-12 03:37:52'),
(18, 'MIKROTIK', 'qwdqwdq', '2022-10-12 03:38:01', '2022-10-12 03:38:01'),
(19, 'MANAGEMENT BANDWIDTH', 'asdas', '2022-10-12 03:38:27', '2022-10-12 03:38:27'),
(20, 'SERVER', 'EFGERG', '2022-10-12 03:38:52', '2022-10-12 03:38:52'),
(21, 'HOTSPOT', 'awdawdawd', '2022-10-12 03:39:04', '2022-10-12 03:39:04'),
(22, 'WEB DESIGN', 'kosdfoiwneoifjopjqpjfoqjpwojfpowejpofjpowejpfojwepofjwopefjowpef', '2022-10-12 03:39:47', '2022-10-12 03:39:47');

-- --------------------------------------------------------

--
-- Table structure for table `panel`
--

CREATE TABLE `panel` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `panel`
--

INSERT INTO `panel` (`id`, `judul`, `harga`, `createdAt`, `updatedAt`) VALUES
(5, 'Solar Home System', 3, '2022-10-11 05:42:23', '2022-10-11 05:42:23'),
(6, 'CCTV Solar Cell', 1, '2022-10-11 05:42:44', '2022-10-11 05:42:44'),
(7, 'Solar Home System', 4, '2022-10-13 07:36:31', '2022-10-13 07:36:31');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `judul`, `alamat`, `keterangan`, `url`, `image`, `createdAt`, `updatedAt`) VALUES
(44, 'INSTALLATION CCTV ', 'bogor, Dramaga', 'Pemasangan CCTV 8 Kamera Indoor dan Outdoor 3 MP', 'http://localhost:5000/image/adc62d1ca3c65ba57e8bfda2428fb816.jpg', 'adc62d1ca3c65ba57e8bfda2428fb816.jpg', '2022-10-11 04:34:04', '2022-10-11 05:25:57'),
(47, 'Pemasangan Solar Home System', 'Jakarta', 'asdsadasd', 'http://localhost:5000/image/423283b3bfe232cf330f8287506552ff.jpg', '423283b3bfe232cf330f8287506552ff.jpg', '2022-10-11 06:33:01', '2022-10-11 06:33:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(71, 'raju', 'raju@gmail.com', '$2b$10$u4zhG.tID9Cluw6scjoh6uPkRnEFm67IQUy02NwwSZ8uJUd9PEx82', NULL, '2022-10-03 06:28:27', '2022-10-14 07:34:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cctv`
--
ALTER TABLE `Cctv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itsolution`
--
ALTER TABLE `itsolution`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `panel`
--
ALTER TABLE `panel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Cctv`
--
ALTER TABLE `Cctv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `itsolution`
--
ALTER TABLE `itsolution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `panel`
--
ALTER TABLE `panel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
