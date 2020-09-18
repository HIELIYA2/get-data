module.exports = (app) => {
  const trads = require('../controllers/trad.js');

  // Retrieve all trads
  app.get('/dashboard/overallBalance', trads.getAll);

  // Retrieve all trads
  app.get('/dashboard/overallPl', trads.getAll);
};
