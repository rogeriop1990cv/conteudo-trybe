SELECT
  JOB_ID,
  AVG(SALARY) AS `Media`
FROM
  hr.employees
GROUP BY
  JOB_ID
ORDER BY
  `Media` DESC;
