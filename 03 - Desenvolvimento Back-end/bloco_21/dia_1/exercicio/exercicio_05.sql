SELECT
  ROUND(MAX(SALARY), 2) `Maximo`,
  ROUND(MIN(SALARY), 2) `Minimo`,
  ROUND(SUM(SALARY), 2) `Total`,
  ROUND(AVG(SALARY), 2) `Media`
FROM
  employees;
