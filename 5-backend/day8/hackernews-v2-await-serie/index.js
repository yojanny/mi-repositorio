'use strict';

const axios = require('axios');

/**
 * CONSIDERACIONES
 * 1. No podemos usar "await" si no estamos dentro de una función "async", por lo que
 * definimos una función principal "async main" donde pondremos el código de
 * nuestra aplicación 
 * 2. NUNCA hay que olvidarse de poner "await" cuando llamemos a una función "async", sino esta
 * devolverá una promesa y el código no funcionará como queremos
 * 3. Más info: https://www.oscarblancarteblog.com/2019/03/15/javascript-async-await/
 */

async function main() {
  const urlTopStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  /**
   * 1. Get top stories
   */
  const axiosResponse = await axios.get(urlTopStories);

  /**
   * 2 Coger las 5 primeras top stories ids
   */
   const topIds = axiosResponse.data.slice(0, 5);
  
  /**
   * 2. Para cada top story id, sacar los detalles una story que se pueden
   * coger de la siguiente url:
   * https://hacker-news.firebaseio.com/v0/item/$storyId.json
   */
  const detallesNoticias = [];
  for (const storyId of topIds) {
    const axiosResponseDetail = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);

    const detalleNoticia = axiosResponseDetail.data;
    const detalleNoticiaFormateada = {
      id: detalleNoticia.id,
      title: detalleNoticia.title,
      time: new Date(detalleNoticia.time * 1000).toISOString(),
    };

    detallesNoticias.push(detalleNoticiaFormateada);
  }

  console.log(detallesNoticias);
}

main();