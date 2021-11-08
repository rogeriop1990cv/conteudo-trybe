SELECT
  `moveis`.title,
  `boxOffice`.domestic_sales,
  `boxOffice`.international_sales
FROM
  Pixar.BoxOffice AS `boxOffice`
  INNER JOIN Pixar.Movies AS `moveis` ON `moveis`.id = `boxOffice`.movie_id;
