SELECT  rating ,AVG(length) AS `Media`
FROM sakila.film
GROUP BY  rating
HAVING  `Media` BETWEEN 115.0 AND 121.50;

SELECT  rating ,SUM(replacement_cost) AS `Toal_custo_substituicao`
FROM sakila.film
GROUP BY  rating
HAVING `Toal_custo_substituicao` > 3950.50
ORDER BY `Toal_custo_substituicao`;
