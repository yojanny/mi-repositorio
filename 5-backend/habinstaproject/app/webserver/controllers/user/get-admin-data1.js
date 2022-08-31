'use strict';

async function getDataAdmin1(req, res) {
  const role = req.claims.role;

  if (role !== 'admin') {
    return res.status(403).send();
  }

  return res.send('hola usuario admin, tienes acceso a esta sección');
}

module.exports = getDataAdmin1;
