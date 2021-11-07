SELECT
  *
FROM
  Pixar.Theater
LEFT JOIN
  Pixar.Movies
ON
  Pixar.Movies.theater_id = Pixar.Theater.id
ORDER BY Pixar.Theater.name;
;
