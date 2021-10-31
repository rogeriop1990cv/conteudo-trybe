SELECT
  CONCAT(`actor`.first_name, ' ', `actor`.last_name),
  `film`.actor_id,
  `film`.film_id
FROM
  sakila.film_actor AS `film`
  INNER JOIN sakila.actor AS `actor` ON `actor`.actor_id = `film`.actor_id;
