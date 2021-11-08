SELECT
  `customer`.first_name,
  `customer`.email,
  `customer`.address_id,
  `address`.address,
  `address`.district
FROM
  sakila.customer AS `customer`
  INNER JOIN sakila.address AS `address` ON `address`.address_id = `customer`.address_id
WHERE
  `address`.district = 'California'
  AND `customer`.first_name LIKE '%rene%';
