SELECT
  `actor`.actor_id,
  `actor`.first_name,
  `film`.film_id
FROM
  sakila.actor AS `actor`
  INNER JOIN sakila.film_actor AS `film` ON `actor`.actor_id = `film`.actor_id;
