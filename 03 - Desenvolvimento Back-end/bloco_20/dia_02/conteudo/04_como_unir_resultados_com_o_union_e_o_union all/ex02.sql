SELECT
  first_name
FROM
  sakila.customer
WHERE
  first_name LIKE '%tracy%'
UNION
SELECT
  first_name
FROM
  sakila.actor
WHERE
  first_name LIKE '%je%';
