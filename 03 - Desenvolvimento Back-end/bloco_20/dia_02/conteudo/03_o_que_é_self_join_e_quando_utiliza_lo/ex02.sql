SELECT
  `filmA`.title,
  `filmA`.rental_duration,
  `filmB`.title,
  `filmB`.rental_duration
FROM
  sakila.film AS `filmA`,
  sakila.film AS `filmB`
WHERE
  `filmA`.rental_duration > 1
  AND `filmA`.rental_duration < 5;
