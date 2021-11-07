SELECT
  title,
  rating
FROM
  Pixar.BoxOffice
  INNER JOIN Pixar.Movies ON Pixar.Movies.id = Pixar.BoxOffice.movie_id
ORDER BY
  rating DESC;
