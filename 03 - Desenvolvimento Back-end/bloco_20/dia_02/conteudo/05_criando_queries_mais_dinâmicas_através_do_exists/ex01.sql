SELECT
 id,
 Title
FROM
  hotel.Books
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.Books_Lent
    WHERE
      hotel.Books.Id = hotel.Books_Lent.book_id
  );

