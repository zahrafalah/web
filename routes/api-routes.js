//api-routes.js - this file offers a set of routes for displaying and saving data to db

//Dependencies

const db = require('../models');

//routes
module.exports = function(app) {
  // GET route for getting all of the users
  app.get('/api/users/', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Users.findAll({})
      .then(function(dbUsers) {
        // We have access to the users as an argument inside of the callback function
        res.json(dbUsers);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // POST route for saving a new user
  app.post('/api/users/', function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    console.log(req.body);
    db.Users.create(req.body)
      .then(function(dbUsers) {
        // We have access to the new user as an argument inside of the callback function
        res.json(dbUsers);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting users. We can get the id of the user to be deleted from
  // req.params.id
  app.delete('/api/users/:id', function(req, res) {
    // We just have to specify which users we want to destroy with "where"
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // PUT route for updating users. We can get the updated users data from req.body
  app.put('/api/users/:id', function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Users.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  //Products table api-routs
  // =============================================================
  // GET route for getting all of the products
  app.get('/api/products/:id?', function(req, res) {
    // findAll returns all entries for a table when used with options (specifying the
    //id or not specifying any id)
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }

    db.Products.findAll({ where })
      .then(function(dbProducts) {
        if (dbProducts.length < 1) {
          res.status(404).send('Nothing was found');
          return;
        }
        // We have access to the users as an argument inside of the callback function
        res.json(dbProducts);
      })
      .catch(function(err) {
        res.status(500).send(err);
      });
  });

  // POST route for saving a new products
  app.post('/api/products', function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    console.log(req.body);
    db.Products.create(req.body)
      .then(function(dbProducts) {
        // We have access to the new user as an argument inside of the callback function
        res.json(dbProducts);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting products. We can get the id of the product to be deleted from
  // req.params.id
  app.delete('/api/products/:id', function(req, res) {
    // We just have to specify which product we want to destroy with "where"
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProducts) {
        res.json(dbProducts);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};

//note: Promises are either resolved or rejected. if its rejected it goes to catch(you
//can do whatever you want to do with it)
//and if its resolved it will go to .then().
