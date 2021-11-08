SELECT
  `customer`.first_name AS 'Primeiro Nome',
  COUNT(`address`.address_id) AS 'Quantidade de endereço'
FROM
  sakila.customer AS `customer`
  INNER JOIN sakila.address AS `address` ON `customer`.address_id = `address`.address_id
WHERE
  sakila.customer.active = 1
GROUP BY
  `customer`.first_name
ORDER BY
  `customer`.first_name DESC;
