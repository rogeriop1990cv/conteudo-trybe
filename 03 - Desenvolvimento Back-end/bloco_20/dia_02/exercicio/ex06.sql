SELECT
  title
FROM
  Pixar.Movies
WHERE
  id IN (
    SELECT
      movie_id
    FROM
      Pixar.BoxOffice
    WHERE
      rating > 7.5
  );
SELECT
  title
FROM
  Pixar.Movies
  INNER JOIN Pixar.BoxOffice ON movie_id = id
WHERE
  rating > 7.1
