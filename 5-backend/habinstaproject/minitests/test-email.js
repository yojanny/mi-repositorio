'use strict';

const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: '7de706d48f9b0544a33086283d47c05c-835621cf-402ec0ec',
  domain: 'sandboxc1e2676219c9476b82131ebdc6025d13.mailgun.org',
});

const data = {
	from: 'test@habinstaproject.com',
	to: 'hab100@yopmail.com',
	subject: 'Bienvenido',
	text: 'Ya te has registrado, loguéate en nuestra app!'
};

mg.messages().send(data, function (error, body) {
  if (error) {
    console.error('error', error);
  }
	console.log(body);
});
