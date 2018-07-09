
//LINK: https://git.generalassemb.ly/WebDev-Connected-Classroom/express-lab-params/blob/master/README.md


//Greetings App
app.get('/greeting/:name', (req, res) => {
  res.send({params: req.params, queries: req.query})
});


const express = require('express');
const app = express();


app.listen(5000, () => {
  console.log('listeining on port 5000');
});
