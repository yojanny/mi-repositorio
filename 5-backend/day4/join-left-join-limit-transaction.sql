
SELECT customer_id, id
FROM bookings
WHERE customer_id = 1;

SELECT customer_id, COUNT(*) AS totalReservas
FROM bookings
WHERE customer_id = 1
GROUP BY customer_id;

SELECT COUNT(*)
FROM bookings
WHERE customer_id = 2;

SELECT customer_id, COUNT(*) AS totalReservas
FROM bookings
GROUP BY customer_id
HAVING totalReservas > 7
ORDER BY totalReservas DESC;


SELECT s.film_id, COUNT(*) AS totalSesiones
FROM screenings s
GROUP BY s.id;

SELECT id, COUNT(*) AS totalSesiones
FROM screenings
GROUP BY id;


/*
	Queremos sacar el nombre de la pelicula con todas las salas (room id)
	en las que se proyecte
*/
SELECT f.name, s.room_id
FROM films f JOIN screenings s
	ON f.id = s.film_id;
    
/*
	Queremos sacar el nombre de la pelicula con el número 
    total de visualizaciones (de screenings)
    y ordenado alfabéticamente por visualizaciones ascendentemente y nombre de peli descendentemente
*/
SELECT f.name, COUNT(*) AS visualizaciones
FROM films f JOIN screenings s
	ON f.id = s.film_id
GROUP BY f.name
ORDER BY visualizaciones ASC, f.name DESC;

/*
-- para el ejemplo del LEFT JOIN, insertamos una película 
-- que no va a tener visualizaciones

INSERT INTO films (name, length_min)  VALUES ('testfilm', 120);
SELECT *
FROM films
ORDER BY name ASC;

*/

/*
	Queremos sacar el nombre de la pelicula con el número 
    total de visualizaciones (de screenings)
    y ordenado alfabéticamente por visualizaciones ascendentemente y nombre de peli descendentemente
	Y si una película no tiene screenings, queremos que salga igual en el listado
    
    NOTA IMPORTANTE:
		- Cuando hacemos un JOIN, el COUNT(*) va a contar las filas agrupadas
        - Cuando hacemos un LEFT o RIGHT JOIN no debemos usar el COUNT(*) sino
			COUNT(columna de la segunda o primera tabla) para que cuente exactamente
            lo que necesitamos. En el caso de peliculas con visualizacines, queremos
            que cuente las visualizaciones y si no hay ninguna visualización pues
            que aparezca el valor por defecto, que en caso de números enteros es el cero (0)
*/
SELECT f.id, f.name, COUNT(s.id) AS visualizaciones
FROM films f LEFT JOIN screenings s
	ON f.id = s.film_id
GROUP BY f.name
ORDER BY visualizaciones ASC, f.name DESC;

-- equivalente a la consulta de arriba porque cambiamos las tablas del from de sitio para forzar un right join
SELECT f.name, COUNT(s.id) AS visualizaciones
FROM screenings s RIGHT JOIN films f
	ON f.id = s.film_id
GROUP BY f.name
ORDER BY visualizaciones ASC, f.name DESC;

SELECT film_id, COUNT(*) as vis FROM
screenings
GROUP BY film_id
ORDER BY vis ASC;

/*
	id y nombre del customer con el total de reservas de cada usuario
    ordenados de clientes más fieles a menos (de más a menos reservas)
    y maximo 3 usuarios
*/
SELECT c.id, c.first_name, COUNT(*) AS reservas
FROM customers c INNER JOIN bookings b
	ON c.id = b.customer_id
GROUP BY c.id
ORDER BY reservas DESC
LIMIT 3;

/*
	id y nombre del customer con el total de reservas de cada usuario
    ordenados de clientes más fieles a menos (de más a menos reservas)
    y maximo 3 usuarios PERO los que se corresponden con el pusto cuarto, quinto y sexto (paginacion)
    
    LIMIT offset, total
		offset significa, a partir de qué posición quieres tus datos
        total Cuántas filas quieres
*/
SELECT c.id, c.first_name, COUNT(*) AS reservas
FROM customers c INNER JOIN bookings b
	ON c.id = b.customer_id
GROUP BY c.id
ORDER BY reservas DESC
LIMIT 6, 3;


/*
	sacar el id y nombre del customer con el id de reserva
	sI el customer no hizo reservas, sacar su nombre e id de todas maneras
*/
SELECT c.id, c.first_name, b.id AS reservaId
FROM customers c LEFT JOIN bookings b
	ON c.id = b.customer_id
ORDER BY reservaId ASC;


/*
	Queremos visualizar para cada película, su nombre, la fecha en la que haya una sesión
    y el nombre de la sala donde se proyecte la sesión
*/
SELECT f.name AS pelicula, s.start_time, r.name AS sala
FROM films f
	JOIN screenings s
		ON f.id = s.film_id
    JOIN rooms r
		ON s.room_id = r.id;
        
        
        
-- como sería una transacción
-- vamos a quitar 100 euros a jose (de mentira) y dárselos a Elsa
-- tabla usuarios con nombre y saldo
START TRANSACTION;
UPDATE usuarios SET saldo = saldo - 100 WHERE usuario = 'jose';
UPDATE usuarios SET saldo = saldo + 100 WHERE usuario = 'elsa';
COMMIT;
-- o ROLLBACK;
