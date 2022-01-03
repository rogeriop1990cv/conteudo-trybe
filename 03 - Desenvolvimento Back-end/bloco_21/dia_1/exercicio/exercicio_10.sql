SELECT
  *
FROM
  employees;
SELECT
  DEPARTMENT_ID,
  COUNT(*) AS `Número de Funcionários`,
  AVG(SALARY) AS `Média Salarial`
FROM
  employees
GROUP BY
  DEPARTMENT_ID
HAVING
  `Número de Funcionários` > 10;
