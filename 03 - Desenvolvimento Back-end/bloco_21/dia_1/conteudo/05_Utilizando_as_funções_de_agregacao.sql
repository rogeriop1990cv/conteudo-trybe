-- 1. A média de duração dos filmes e dê o nome da coluna de 'Média de Duração'.
SELECT AVG(rental_duration) AS 'Média de Duração' FROM sakila.film;

-- 2. A duração mínima dos filmes como 'Duração Mínima'.
SELECT MIN(rental_duration) AS 'Média de Duração' FROM sakila.film;

-- 3. A duração máxima dos filmes como 'Duração Máxima'.
SELECT MAX(rental_duration) AS 'Média de Duração' FROM sakila.film;

-- 4. A soma de todas as durações como 'Tempo de Exibição Total'.
SELECT SUM(rental_duration) AS 'Média de Duração' FROM sakila.film;

-- 5. E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(rental_duration) AS 'Média de Duração' FROM sakila.film;
