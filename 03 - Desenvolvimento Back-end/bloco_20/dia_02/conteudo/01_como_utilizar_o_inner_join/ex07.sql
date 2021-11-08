SELECT
  `actor`.actor_id,
  `actor`.first_name,
  `film_actor`.film_id,
  `film`.title
FROM
  sakila.actor AS `actor`
  INNER JOIN sakila.film_actor AS `film_actor` ON `actor`.actor_id = `film_actor`.actor_id
  INNER JOIN sakila.film AS `film` ON `film`.film_id = `film_actor`.film_id;
