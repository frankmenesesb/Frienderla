delimiter $$



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
  `foto` varchar(200) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=utf8$$

CREATE TABLE `amigos` (
  `idamigos` int(11) NOT NULL AUTO_INCREMENT,
  `usuario1` varchar(45) DEFAULT NULL,
  `usuario2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idamigos`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8$$

SELECT * FROM friender.amigos;



CREATE TABLE `fotos` (
  `idfotos` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idfotos`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8$$

CREATE TABLE `gustos` (
  `idgustos` int(11) NOT NULL AUTO_INCREMENT,
  `pelicula` varchar(45) DEFAULT NULL,
  `deporte` varchar(45) DEFAULT NULL,
  `comida` varchar(45) DEFAULT NULL,
  `musica` varchar(45) DEFAULT NULL,
  `id_usuarios_gustos` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idgustos`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8$$


CREATE TABLE `mensajes` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `alias` varchar(20) NOT NULL,
  `mensaje` varchar(120) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8$$
