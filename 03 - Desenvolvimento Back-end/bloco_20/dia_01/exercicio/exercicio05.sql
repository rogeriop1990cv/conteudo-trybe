SELECT 
  round(MAX(SALARY), 2) AS `Maior Salario`,
  round(MIN(SALARY), 2) AS `Menor Salario`,
  round(SUM(SALARY), 2) AS `Todos Salarios`,
  round(AVG(SALARY), 2) AS `Média Salarial`
FROM
  hr.employees;
