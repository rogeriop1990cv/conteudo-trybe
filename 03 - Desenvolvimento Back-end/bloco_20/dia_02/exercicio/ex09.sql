SELECT
  name,
  location
FROM
  Pixar.Theater
WHERE
  NOT EXISTS(
    SELECT
      *
    FROM
      Pixar.Movies
    WHERE
      Pixar.Movies.theater_id = Pixar.Theater.id
  );
