const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.post("/send-email", function(req, res) {
  const mailOptions = {
    from: "marafonolya2019@gmail.com", // sender address
    to: "olgabondare21@gmail.com", // list of receivers
    subject: "Subject of your email", // Subject line
    html: `<table cellpadding="10" border="2" cellspacing="0"><tr><td>Name:</td><td>${req.body.name}</td></tr>
    <tr><td>Last Name:</td><td>${req.body.lastName}</td></tr><tr><td>Phone:</td><td>${req.body.phone}</td></tr></table>`
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marafonolya2019@gmail.com",
      pass: "1-marafon"
    }
  });

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else res.end();
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
