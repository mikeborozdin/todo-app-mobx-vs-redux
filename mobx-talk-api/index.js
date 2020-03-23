const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.text());

const port = 9999;

const todos = ['Buy milk', 'Call estate agent'];


app.get('/todos', (_req, res) => res.send({ todos }));
app.post('/todos', (req, res) => {
  todos.push(req.body);

  console.log(req.body);

  console.log(todos);

  res.sendStatus(201);
});

app.listen(port, () => console.log(`API app listening on port ${port}!`));
