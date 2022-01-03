UPDATE
  employees
SET
  PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777');

-- UPDATE hr.employees
-- SET phone_number = REPLACE(phone_number, '515', '777')
-- WHERE phone_number LIKE '515%';
