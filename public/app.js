var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

// localhost:300/assects/style.css

app.listen(3000);
console.log('you are listing to port 3000');

