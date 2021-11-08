SELECT
  `staff`.first_name,
  `staff`.last_name,
  `address`.address
FROM
  sakila.staff AS `staff`
INNER JOIN
  sakila.address AS `address`
ON
  `address`.address_id = `staff`.address_id
