SELECT
  rating,
  AVG(length) AS `Tamanho`
FROM
  sakila.film
GROUP BY
  rating
HAVING
  `Tamanho` >= 115.0
  AND `Tamanho` <= 121.50
ORDER BY
  `Tamanho` DESC;
