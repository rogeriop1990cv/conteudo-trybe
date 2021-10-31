SELECT
  rating,
  SUM(replacement_cost) AS `Valor`
FROM
  sakila.film
GROUP BY
  rating
HAVING
  `Valor` > 3950.50;
