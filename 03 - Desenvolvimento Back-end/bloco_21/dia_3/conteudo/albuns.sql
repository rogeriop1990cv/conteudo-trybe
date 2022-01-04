CREATE database albuns;

CREATE TABLE albuns.artista(
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
) ENGINE = InnoDB;

USE albuns;
CREATE TABLE album(
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5, 2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
)ENGINE=InnoDB;


CREATE TABLE estilomusical (
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB;
