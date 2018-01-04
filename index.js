const express = require('express');
var path = require('path');
const app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(process.env.PORT || 3001, () => console.log('CSRF attack is on!'));