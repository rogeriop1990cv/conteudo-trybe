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

-- GABARITO
-- SELECT job_id, AVG(salary) 'average_salary'
-- FROM hr.employees
-- WHERE job_id <> 'IT_PROG'
-- GROUP BY job_id
-- ORDER BY `average_salary` DESC;
