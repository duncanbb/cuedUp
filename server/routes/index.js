const quotesController = require('../controllers').quotes;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the quotes api',
  }));
  app.post('/api/quotes', quotesController.create);
};

