SELECT
  `customer`.customer_id,
  `customer`.first_name,
  `customer`.email,
  `customer`.address_id,
  `address`.address
FROM
  sakila.customer AS `customer`
  INNER JOIN sakila.address AS `address` ON `address`.address_id = `customer`.customer_id
ORDER BY
  `customer`.first_name DESC
LIMIT
  100;
