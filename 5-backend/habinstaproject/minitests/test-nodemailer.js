'use strict';

const nodemailer = require('nodemailer');

async function main() {
  // create reusable transporter object using the default SMTP transport
  /*Grab your SMTP credentials:
SMTP hostname: smtp.mailgun.org
Port: 587 (recommended)
Username: postmaster@sandboxc1e2676219c9476b82131ebdc6025d13.mailgun.org
Default password:
f1add21c8a6e15251b3d796a78261a3d-835621cf-302dc096*/
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: 'matinho@gmail.com',
      pass: 'RUzK8F/v1$google',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "hab100@yopmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main();
