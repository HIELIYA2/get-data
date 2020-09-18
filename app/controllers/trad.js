const Trad = require('../models/trad.js');

// Retrieve all Customers from the database.
exports.getAll = (req, res, next) => {
  Trad.getAll((err, data) => {
    err ? next(err) : res.send(data);
  });
};
