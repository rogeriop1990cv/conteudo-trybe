-- 01
SELECT
  `actor`.actor_id,
  `actor`.first_name,
  `film`.film_id
FROM
  sakila.actor AS `actor`
INNER JOIN
  sakila.film_actor AS `film`
  ON `actor`.actor_id = `film`.actor_id;

-- 02
SELECT
  `staff`.first_name,
  `staff`.last_name,
  `address`.address
FROM
  sakila.staff AS `staff`
INNER JOIN
  sakila.address AS `address` 
  ON `staff`.address_id = `address`.address_id
;



SELECT * FROM staff;
SELECT * FROM address;
