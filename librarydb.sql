-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2022 at 02:21 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `librarydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `book_title` varchar(100) NOT NULL,
  `authors` varchar(100) NOT NULL,
  `date_published` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `quantity` tinyint(100) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `book_title`, `authors`, `date_published`, `category`, `quantity`, `status`) VALUES
(2, 'General Mathematics', '', '', 'Textbook', 127, 'In-Stack'),
(54, 'Filipino Sa Piling Larang Akademik', '', '', 'Textbook', 127, 'In Stack'),
(55, 'Personal Development', '', '', 'Textbook', 127, 'In-Stack'),
(56, 'Enterpreneurship', 'Dr. Eduardo A. Morato, Jr.', '', 'Textbook', 127, 'In-Stack'),
(57, 'Fundamental of Accountancy, Business and Managemen', 'Joselito G. Florendo', '', 'Textbook', 127, 'In-Stack'),
(58, 'Principles of Marketing', 'A. B. Ilano', '', 'Textbook', 127, 'In-Stack'),
(59, 'Math for Engaged Learning (Precalculus)', '', '', 'Textbook', 127, 'In-Stack'),
(60, 'General Chemistry 2', '', '', 'Textbook', 127, 'In-Stack'),
(61, 'General Biology 1', 'Maria Angelica D. Rea, Mary Zugar M. Dequillo, Jenny Lyn C. Chua', '', 'Textbook', 127, 'In-Stack'),
(62, 'General Physics 1', 'Gil Nonato C. Santos, Ph.D.', '', 'Textbook', 127, 'In-Stack'),
(63, 'General Chemistry 1', 'LLucina V. Ilao, Betty M. Lontoc, Edwehna Elinore S. Paderna-Gayon ', '', 'Textbook', 127, 'In-Stack'),
(64, 'Math for Engaged Learning (Basic Calcus)', '', '', 'Textbook', 127, 'In-Stack'),
(65, '21st Century Literature from the Philippines and the World', 'Marikit Tara A. Uychoco', '', 'Textbook', 127, 'In-Stack'),
(66, 'Earth Science', '', '', 'Textbook', 127, 'In-Stack'),
(67, 'Physical Education and Health 2', '', '', 'Textbook', 127, 'In-Stack'),
(68, 'An Introduction to Qualitative Research (Practical Research 1)', 'Hiyas S. Clamor-Torneo, MA, Ador R. Torneo, Ph.D.', '', 'Textbook', 127, 'In-Stack'),
(69, 'Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino', 'Servillano T. Marquez Jr., Ph.D.', '', 'Textbook', 127, 'In-Stack'),
(70, 'Reading and Writing Skills', '', '', 'Textbook', 127, 'In-Stack'),
(71, 'Empowerment Technologies', '', '', 'Textbook', 127, 'In-Stack'),
(72, 'Math Connections in the Digital Age Statistics and Probability', 'Luis Allan B. Melosantos, Janice F. Antonio, Susan J. Robles, Ryan M. Bruce', '', 'Textbook', 127, 'In-Stack'),
(73, 'Oral Communication in Context', 'Philippe John Fresnillo Sipacio, Anne Richie Garcia Balgos', '', 'Textbook', 127, 'In-Stack'),
(74, 'Introduction to Philosophy of the Human Person', 'Roberto D. Abella, M.Div., D.Min.', '', 'Textbook', 127, 'In-Stack'),
(75, 'Understanding Culture, Society and Politics', '', '', 'Textbook', 127, 'In-Stack'),
(76, 'English for Academic and Professional Purposes', '', '', 'Textbook', 127, 'In-Stack'),
(77, 'Pagbasa at Pagsusuri ng Iba\'t Ibang Teksto Tungo sa Pananaliksik', 'Lolita T. Bandril, Diana F. Palmes', '', 'Textbook', 127, 'In-Stack'),
(91, 'qqq', 'aisha', '1212-12-12', 'Textbook', 1, 'In-Stack');

-- --------------------------------------------------------

--
-- Table structure for table `borrowing`
--

CREATE TABLE `borrowing` (
  `user_id` int(11) NOT NULL,
  `bookTitle` varchar(100) NOT NULL,
  `date_borrowed` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `due_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `log_id` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `logged_in` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `logged_out` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirmpassword` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `confirmpassword`, `role`) VALUES
(2, 'Admin01', 'admin01@gmail.com', '123456', '123456', 'Admin'),
(3, 'Admin02', 'admin02@gmail.com', '234567', '234567', 'Admin'),
(4, 'Admin03', 'admin03@gmail.com', '345678', '345678', 'Admin'),
(5, 'Kenneth', 'palencia.kenneth69@gmail.com', '654321', '654321', 'Student'),
(6, 'Mary Kris', 'marykris@gmail.com', 'marykris', 'marykris', 'Teacher'),
(7, 'Vince Christopher', 'vincechristopher@gmail.com', 'vince01', 'vince01', 'Student'),
(8, 'Mark', 'mark@gmail.com', 'mark12', 'mark12', 'Student'),
(9, 'Adrian', 'adrian@gmail.com', 'adrian1', 'adrian1', 'Student'),
(10, 'Ariel', 'ariel@gmail.com', 'ariel1', 'ariel1', 'Student'),
(11, 'Ariel', 'ariel@gmail.com', 'ariel1', 'ariel1', 'Student'),
(12, 'Diane', 'diane@gmail.com', 'diane1', 'diane1', 'Student'),
(13, 'Harvey', 'harvey@gmail.com', 'harvey1', 'harvey1', 'Student'),
(104, 'delia', 'delia@gmail.com', '121212', '121212', 'Admin'),
(106, 'Haley', 'haley@gmail.com', '123123', '123123', 'Teacher'),
(107, 'hale', 'hale@gmail.com', '123123', '123123', 'Teacher'),
(108, 'hale', 'hale@gmail.com', '123123', '123123', 'Teacher');

-- --------------------------------------------------------

--
-- Table structure for table `user_backup`
--

CREATE TABLE `user_backup` (
  `id` int(100) NOT NULL DEFAULT 0,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirmpassword` varchar(100) CHARACTER SET utf8 NOT NULL,
  `role` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_backup`
--

INSERT INTO `user_backup` (`id`, `name`, `email`, `password`, `confirmpassword`, `role`) VALUES
(10, 'Admin01', 'admin01@gmail.com', '123456', '123456', ''),
(12, 'Admin02', 'admin02@gmail.com', '234567', '234567', ''),
(13, 'Admin03', 'admin03@gmail.com', '345678', '345678', ''),
(14, 'Kenneth', 'palencia.kenneth69@gmail.com', '654321', '654321', ''),
(15, 'Mary Kris', 'marykris@gmail.com', 'marykris', 'marykris', ''),
(16, 'Vince Christopher', 'vincechristopher@gmail.com', 'vince01', 'vince01', ''),
(17, 'Mark', 'mark@gmail.com', 'mark12', 'mark12', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD CONSTRAINT `borrowing_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
