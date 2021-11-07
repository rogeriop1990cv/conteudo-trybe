SELECT
  rating
FROM
  Pixar.BoxOffice
WHERE
  movie_id IN (
    SELECT
      id
    FROM
      Pixar.Movies
    WHERE
      Pixar.Movies.year > 2009
  );
SELECT
  rating,
  Pixar.Movies.title
FROM
  Pixar.BoxOffice
  INNER JOIN Pixar.Movies ON id = movie_id
WHERE
  year > 2009;
