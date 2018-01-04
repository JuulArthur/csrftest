const express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(3001, () => console.log('CSRF attack is on!'));