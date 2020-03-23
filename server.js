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
    <tr><td>Phone:</td><td>${req.body.phone}</td></tr><tr><td>Workout:</td><td>${req.body.workout}</td></tr>
    <tr><td>Effort:</td><td>${req.body.effort}</td></tr><tr><td>Weight:</td><td>${req.body.weight}</td></tr>
    <tr><td>Height:</td><td>${req.body.height}</td></tr><tr><td>Waist:</td><td>${req.body.waist}</td></tr>
    <tr><td>Hips:</td><td>${req.body.hips}</td></tr><tr><td>Bust:</td><td>${req.body.bust}</td></tr>
    <tr><td>Arm:</td><td>${req.body.arm}</td></tr><tr><td>Leg:</td><td>${req.body.leg}</td></tr>
    <tr><td>Allergy:</td><td>${req.body.milk ? 'Лактоза' : ''} ${req.body.meat ? 'Мясо' : ''} ${req.body.egg ? 'Яйца' : ''}
    ${req.body.fish ? 'Рыба' : ''} ${req.body.bird ? 'Птица' : ''} ${req.body.gluten ? 'Глютен' : ''}
    ${req.body.avocado ? 'Авокадо' : ''} ${req.body.nuts ? 'Орехи' : ''} ${req.body.beans ? 'Бобы' : ''}</td></tr>
    <tr><td>Comments:</td><td>${req.body.comments}</td></tr><tr><td>Agree:</td><td>${req.body.agree}</td></tr></table>`
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "marafonolya2019@gmail.com",
      pass: "sobolevahealth6464"
    }
  });

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else res.end();
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
