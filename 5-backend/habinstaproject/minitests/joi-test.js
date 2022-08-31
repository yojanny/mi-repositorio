'use strict';

const Joi = require('joi');

const accountData = {
  email: 'hab100@yopmail.com',
  password: 'MySecurePassword1234',
};

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
});

try {
  Joi.assert(accountData, schema);
  console.log('datos correctos :)');
} catch (e) {
  console.error(JSON.stringify(e));
}


/*
{
  "_original":{
    "email":"hab100yopmail.com",
    "password":"MySecurePassword1234"
  },
  "details":[{
    "message":"\"email\" must be a valid email",
    "path":["email"],
    "type":"string.email",
    "context":{"value":"hab100yopmail.com","invalids":["hab100yopmail.com"],"label":"email","key":"email"}}]}
*/