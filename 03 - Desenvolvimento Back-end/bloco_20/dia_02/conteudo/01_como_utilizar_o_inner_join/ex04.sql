SELECT
  
  `customer`.first_name,
  `customer`.email,
  `customer`.address_id,
  `address`.address,
  `address`.district
FROM
  sakila.customer AS `customer`
INNER JOIN
  sakila.address AS `address`
ON
  `address`.address_id = `customer`.customer_id
WHERE
  CONCAT(`customer`.first_name, ' ', `customer`.last_name) LIKE "rene%" AND
  `address`.district = 'California'
  
;
