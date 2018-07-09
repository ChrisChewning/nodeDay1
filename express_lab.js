
//LINK: https://git.generalassemb.ly/WebDev-Connected-Classroom/express-lab-params/blob/master/README.md



//STEP 1: Get the browser to say the name variable.
// const express = require('express');
// const app = express(); //app stands for application
// const name = 'Chris';
//
// //#1: Greetings App
// app.get("/greeting/:name", (req, res) => {
//   res.send(req.params.name)
// });
//
// app.listen(5000, () => {
//   console.log("listening on port 5000");
// });

// http://localhost:5000/greeting/Chris will say Chris in the browser


//STEP 2: Get the browser to say a sentence with the name variable.
// http://localhost:5000/greeting/Chris will say Hello there Chris in the browser

const express = require('express');
const app = express(); //app stands for application
const name = 'Chris';

//#1: Greetings App
app.get("/greeting/:name", (req, res) => {
  res.send('Hello there ' + req.params.name)
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
