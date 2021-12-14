-- 01
SELECT
  `actor`.actor_id,
  `actor`.first_name,
  `film`.film_id
FROM
  sakila.actor AS `actor`
  INNER JOIN sakila.film_actor AS `film` ON `actor`.actor_id = `film`.actor_id;
-- 02
SELECT
  `staff`.first_name,
  `staff`.last_name,
  `address`.address
FROM
  sakila.staff AS `staff`
  INNER JOIN sakila.address AS `address` ON `staff`.address_id = `address`.address_id;
-- 03
SELECT
  `customer`.customer_id,
  `customer`.first_name AS `name`,
  `customer`.email,
  `address`.address_id,
  `address`.address
FROM
  sakila.customer AS `customer`
  INNER JOIN sakila.address AS `address` ON `address`.address_id = `customer`.address_id
ORDER BY
  `name` DESC
LIMIT
  100;

-- 04
SELECT
  `customer`.customer_id,
  `customer`.first_name AS `name`,
  `customer`.email,
  `address`.address_id,
  `address`.address,
  `address`.district
FROM
  sakila.customer AS `customer`
  INNER JOIN sakila.address AS `address` ON `address`.address_id = `customer`.address_id
WHERE
  `address`.district LIKE 'California' AND `customer`.first_name LIKE '%rene%'
ORDER BY
  `name` DESC
LIMIT
  100;





SELECT
  *
FROM
  sakila.customer;

SELECT
  *
FROM
  address;
