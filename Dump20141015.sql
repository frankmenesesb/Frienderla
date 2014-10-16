CREATE DATABASE  IF NOT EXISTS `friender` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `friender`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: friender
-- ------------------------------------------------------
-- Server version	5.5.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bienvenida`
--

DROP TABLE IF EXISTS `bienvenida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bienvenida` (
  `mensaje` varchar(400) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bienvenida`
--

LOCK TABLES `bienvenida` WRITE;
/*!40000 ALTER TABLE `bienvenida` DISABLE KEYS */;
/*!40000 ALTER TABLE `bienvenida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensajes` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `alias` varchar(20) NOT NULL,
  `mensaje` varchar(120) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` VALUES (24,'adolfus','hola','127.0.0.1','03-49-55'),(25,'adolfus','bien ?','127.0.0.1','03-51-19'),(26,'adolfus','si bien :)','127.0.0.1','03-51-50'),(27,'adolfus','prueba','127.0.0.1','04-01-55'),(28,'cperez','polas','127.0.0.1','04-08-15'),(29,'adolfus','bien o que?','127.0.0.1','17-51-10'),(30,'adolfus','casillas es un paquete','127.0.0.1','18-10-02'),(31,'adolfus','paquete sebas','127.0.0.1','18-52-19'),(32,'adolfus','plano','127.0.0.1','21-30-31'),(33,'adolfus','paquete','127.0.0.1','21-31-53'),(34,'adolfus','loco','127.0.0.1','21-32-33'),(35,'adolfus','mensaje principal','127.0.0.1','21-35-27'),(36,'adolfus','gallina','127.0.0.1','21-36-00'),(37,'adolfus','arreglo','127.0.0.1','21-39-28'),(38,'adolfus','prueba','127.0.0.1','21-39-40'),(39,'adolfus','asa','127.0.0.1','21-41-47'),(40,'adolfus','hola','127.0.0.1','21-53-23'),(41,'adolfus','prueba','127.0.0.1','21-54-41'),(42,'adolfus','hola aaa','127.0.0.1','22-29-48'),(43,'adolfus','apolo','127.0.0.1','22-30-57');
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `apellidos` text,
  `login` varchar(40) NOT NULL,
  `password` varchar(300) NOT NULL,
  `email` text,
  `estado` int(11) DEFAULT '0',
  `banned` int(11) DEFAULT '0',
  `rango` int(11) DEFAULT '0',
  `telefono` int(30) DEFAULT NULL,
  `cumpleanos` varchar(100) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (16,'adolfo','meneses','adolfus','1c5be8d7d0663ab95b45a806502e5b14afa7797f','adolfo@gmail.com',1,0,0,NULL,NULL,NULL,NULL,NULL),(23,'frank','meneses','frank','1c5be8d7d0663ab95b45a806502e5b14afa7797f','cparra@gmail.com',0,0,0,NULL,NULL,NULL,NULL,NULL),(24,'frank','meneses','usu','c4bd71ed1abc271904271cf168531d0c970013e6','',0,0,0,NULL,NULL,NULL,NULL,NULL),(25,'frank','carlos','medi','070f0ba002095fbd616b1ac62fab981704c1a127','',0,0,0,NULL,NULL,NULL,NULL,NULL),(26,'marcos','leiva','polito','98a34dd9310f5e6827c37b7a55b9cecc83085a7c','',0,0,0,NULL,NULL,NULL,NULL,NULL),(27,'asdas','car','poloaa','1c5be8d7d0663ab95b45a806502e5b14afa7797f','fmenes@gmail.com',0,0,0,9909090,'12/12/1990','Hombre','colombia','cali'),(28,'luis','mejia','lolopolo','5eab0cdfd4db7a3fd05fd72181c8b825201e4059','ju@gmail.com',0,0,0,2232323,'12/12/1990','Hombre','colombia','cali'),(29,'edua','mier','meneses12','1c5be8d7d0663ab95b45a806502e5b14afa7797f','emier@gmail.com',0,0,0,9909090,'12/12/1990','Hombre','colombia','cali'),(30,'lopez','viallgra','lolouy','070f0ba002095fbd616b1ac62fab981704c1a127','julio@mgail',0,0,0,9909090,'12/12/1990','Hombre','colombia','cali'),(31,'luys','posada','posada','c0d55a93374fd386a19819f394cfad6097458e86','posada@gmail.com',0,0,0,99090,'18/12/1990','Hombre','colombia','cali'),(32,'marco','sare','locuratoal','f8413b05a2d6ac5549c1062bcc9e607607a884bf','marco@gmail.com',0,0,0,9909090,'12/12/1990','Hombre','colombia','cali');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `hometown` varchar(45) DEFAULT NULL,
  `job` varchar(45) DEFAULT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'frank','meneses',22,'job','job','locales/inicio.png'),(2,'carlos','parra',21,'job','job','http://augusta.uao.edu.co/moodle/file.php/4523/Bill_Cosby.gif');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-15 19:47:37
