'use strict';

const url = require('url');

/**
 * http://localhost:8000/edicion/barbanza/?section=deportes&fecha=2019-12-03
 * 
 * Mirar doc: https://nodejs.org/api/url.html#url-strings-and-url-objects
 */

const partes = url.parse('http://admin:1234@localhost:8000/edicion/barbanza/?section=deportes&fecha=2019-12-03#miHash');

console.log(partes);
