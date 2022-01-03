SELECT
  JOB_ID,
  COUNT(JOB_ID)
FROM
  employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID = "IT_PROG";

-- GABARITO
-- SELECT
--   JOB_ID,
--   COUNT(*) AS 'total'
-- FROM
--   hr.employees
-- WHERE
--   JOB_ID = "IT_PROG";
