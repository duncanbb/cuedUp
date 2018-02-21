const { Quote } = require('../models/quote');

module.exports = {
  create: (req, res) => {
    console.log(Quote);
    return Quote.create({
      body: req.body.title,
      authorId: req.body.authorId,
      contributorId: req.body.contributorId,
    })
      .then(quote => res.status(201).send(quote))
      .catch(err => res.status(400).send(err));
  },
};
