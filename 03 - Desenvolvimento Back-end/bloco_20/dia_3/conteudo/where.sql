SELECT  *
FROM sakila.actor
WHERE last_name = 'DAVIS';

SELECT  *
FROM sakila.actor
WHERE actor_id=101;

SELECT  *
FROM sakila.film;

# > maior que
SELECT  *
FROM sakila.film
WHERE `length` > 50
ORDER BY `length`;

# > maior que
SELECT  *
FROM sakila.film
WHERE `length` < 50
ORDER BY `length`;
