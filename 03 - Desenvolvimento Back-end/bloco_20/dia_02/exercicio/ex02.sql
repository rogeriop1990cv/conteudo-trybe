use Pixar;
SELECT
  title,
  domestic_sales,
  international_sales
FROM
  BoxOffice
  INNER JOIN Movies ON Movies.id = BoxOffice.movie_id
WHERE
  international_sales > domestic_sales;
