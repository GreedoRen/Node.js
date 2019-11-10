let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();

// set up template
app.set('view engine', 'ejs');

// static files
app.use('/assets', express.static('./public'));

// fire controllers
todoController(app);

app.listen(3000);
console.log('HELLO');
