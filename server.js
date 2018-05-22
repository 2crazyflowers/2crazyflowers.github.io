 const express = require('express');
const path = require('path');
let app = require('express')();
const bodyParser = require('body-parser');

//app.use(require('body-parser').urlencoded());

// const CONTACT_ADDRESS = 'me@company.com';

// let mailer = require('nodemailer').createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.GMAIL_ADDRESS,
//     pass: process.env.GMAIL_PASSWORD,
//   }
// });

// app.post('/contact', function (req, res) {
//   mailer.sendMail({
//     from: req.body.from,
//     to: [CONTACT_ADDRESS],
//     subject: req.body.subject || '[No subject]',
//     html: req.body.message || '[No message]',
//   }, function (err, info) {
//     if (err) return res.status(500).send(err);
//     res.json({ success: true });
//   })
// });

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
// Yes, the app uses express.

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
