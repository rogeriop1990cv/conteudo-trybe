-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT
  AVG(replacement_cost) AS 'Média de Duração',
  AVG(replacement_cost) AS 'Duração Mínima',
  AVG(replacement_cost) AS 'Duração Máxima',
  AVG(replacement_cost) AS 'Tempo de Exibição Total',
  COUNT(replacement_cost) AS 'Filmes Registrados'
FROM
  sakila.film;
