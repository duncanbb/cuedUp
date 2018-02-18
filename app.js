const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// logs requests to console
app.use(logger('dev'));
// formats incoming request data as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({ message: 'welcome to cuedUp' }));

module.exports = app;
