SHOW DATABASES;
DROP SCHEMA IF EXISTS `stipps_2`;
CREATE DATABASE IF NOT EXISTS `stipps_2`;
USE `stipps_2`;

DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso`(
  `` VARCHAR(128) NOT NULL PRIMARY KEY,
  `expires` int(11),
  `data` MEDIUMTEXT
);

DROP TABLE IF EXISTS `cursousuario`;
CREATE TABLE `cursousuario`(
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(60) NOT null,
  fullname VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
/*
-- ALTER TABLE `cursousuario` ADD PRIMARY KEY(id);
-- ALTER TABLE `cursousuario` MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
*/
DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `cursousuario` (`id`)
);

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` INT(11) DEFAULT NULL,
  `correo` VARCHAR(100) DEFAULT NULL,
  `direccion` VARCHAR(255) NULL,
  `usuario` VARCHAR(100) NULL,
  `clave` VARCHAR(255) NULL
);

SELECT * FROM `stipps_2`.`usuario`;