const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world!');
});

app.get('/users', (req, res) => {
  res.send([
    {name: 'Tyler', age: '26'},
    {name: 'Tyler', age: '26'},
    {name: 'Tyler', age: '26'}
  ]);
});

app.listen(3000);
module.exports.app = app;