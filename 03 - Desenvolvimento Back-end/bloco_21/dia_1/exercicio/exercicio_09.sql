SELECT * FROM employees;

SELECT
  JOB_ID,
  AVG(SALARY) AS `média salarial`
FROM
  employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID <> 'IT_PROG'
ORDER BY `média salarial` DESC;
