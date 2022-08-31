-- esto es un comentario
# esto tambien es un comentario

/*
	Esto es un
	comentario multilinea
	mas info en: https://dev.mysql.com/doc/refman/8.0/en/comments.html
*/

-- SELECT AVG(length_min)
-- FROM films;
-- SELECT * 
-- FROM films
-- WHERE length_min > 115;

-- SELECT MIN(length_min) AS minMinutos, MAX(length_min) AS maxMinutos
-- FROM films;

-- SELECT film_id, start_time
-- FROM screenings 
-- WHERE DATE(start_time) BETWEEN '2017-10-06' AND '2017-10-13'
-- ORDER BY start_time;

-- SELECT *
-- FROM screenings
-- WHERE MONTH(start_time) = 10
-- AND YEAR(start_time) = 2017;


-- Que empiece por B: 'B%'
-- Que acabe por B: '%B'
-- Que contenga B: '%B%'
-- SELECT * 
-- FROM films
-- WHERE name LIKE 'B%' AND length_min > (
-- 	SELECT AVG(length_min)
-- 	FROM films
-- )
-- ORDER BY length_min DESC;

-- SELECT email
-- FROM customers
-- WHERE id NOT IN (SELECT DISTINCT(customer_id) FROM bookings);
