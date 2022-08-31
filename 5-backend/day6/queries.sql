SELECT f.name, s.start_time
FROM films f 
	JOIN screenings s ON f.id = s.film_id;


SELECT * FROM reserverd_seat;

SELECT s.room_id, s.id, COUNT(*) as totalReservas
FROM seats s JOIN reserved_seat rs
	ON s.id = rs.seat_id
GROUP BY s.id
ORDER BY totalReservas DESC;

-- Ejercicio, queremos todos los datos de screenings que no tengan reservas
-- solucion 1
SELECT *
FROM screenings
WHERE id NOT IN (
	SELECT screening_id
	FROM bookings
);

-- solucion 2
SELECT s.*
FROM screenings s
	LEFT JOIN bookings b 
		ON s.id = b.screening_id
WHERE b.id IS NULL;



-- UNION
USE mycompany;
SELECT name, salary
FROM employee
UNION
SELECT name, salary
FROM intership;

SELECT name, salary
FROM employee
WHERE zip >= 15008
UNION
SELECT name, salary
FROM intership;

SELECT name, salary, department
FROM employee
UNION
SELECT name, salary, NULL
FROM intership;

SELECT name, salary, NULL as department
FROM intership
UNION
SELECT name, salary, department
FROM employee;
