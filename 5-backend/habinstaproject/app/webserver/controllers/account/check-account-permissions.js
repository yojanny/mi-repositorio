'use strict';

/**
 * 
 * PreCondition: Este middleware tiene que ir obrigatoriamente a continuación del checkAccountSession,
 * sino no funciona, porque necesitamos el req.claims
 */
async function checkAccountPermissions(req, res, next) {
  const role = req.claims.role;

  if (role !== 'admin') {
    return res.status(403).send();
  }

  next();
}

module.exports = checkAccountPermissions;
