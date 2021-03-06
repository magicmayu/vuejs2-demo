var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

const types = {
  foo: {
    name: 'Foo',
  },
  bar: {
    name: 'Bar',
  },
  baz: {
    name: 'Baz',
  },
};

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/types', function (req, res) {
  res.json({ types });
});

// more routes for our API will happen here
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
