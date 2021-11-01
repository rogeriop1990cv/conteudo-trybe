(
  SELECT
    first_name
  FROM
    sakila.actor
  ORDER BY
    actor_id DESC
  LIMIT
    5
)
UNION
  (
    SELECT
      first_name
    FROM
      sakila.staff
    WHERE
      staff_id = 1
  )
UNION
  (
    SELECT
      first_name
    FROM
      sakila.customer
    LIMIT
      5 OFFSET 15
  )
ORDER BY
  first_name;
