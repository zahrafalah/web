const express = require('express');

const app = express();
var bodyParser = require('body-parser');

const Port = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
// app.use(express.static('public'));

// Routes
// =============================================================
require('./routes/api-routes.js')(app);

//starter Pack. Hard-coded Data
// app.get('/api/users', (req, res) => {
//   const users = [
//     { id: 1, firstName: 'John', lastName: 'Doe' },
//     { id: 2, firstName: 'Steve', lastName: 'Mary' },
//     { id: 3, firstName: 'Mary', lastName: 'Swanson' }
//   ];
//   res.json(users);
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(Port, () => console.log(`Server started on port ${Port}`));
});
