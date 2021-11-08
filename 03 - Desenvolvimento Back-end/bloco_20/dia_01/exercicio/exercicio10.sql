SELECT
  department_id,
  AVG(SALARY) AS `Media`,
  COUNT(*) AS `Numero de Funcionarios`
FROM
  hr.employees
GROUP BY
  department_id
HAVING
  `Numero de Funcionarios` > 10;
