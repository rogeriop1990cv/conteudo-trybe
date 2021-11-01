SELECT
  `staff`.first_name,
  `staff`.last_name,
  AVG(`payment`.amount)
FROM
  sakila.staff AS `staff`
INNER JOIN
  sakila.payment AS `payment`
ON
  `staff`.staff_id = `payment`.staff_id
WHERE
  YEAR(`payment`.payment_date) = '2006'
GROUP BY
  `staff`.first_name,
  `staff`.last_name
;
