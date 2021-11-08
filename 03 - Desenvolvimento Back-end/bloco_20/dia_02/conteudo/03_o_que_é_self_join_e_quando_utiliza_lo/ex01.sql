SELECT
  t1.film_id,
  t1.replacement_cost,
  t2.film_id,
  t2.replacement_cost
FROM
  sakila.film AS t1,
  sakila.film AS t2
WHERE
  t1.replacement_cost = t2.replacement_cost;
