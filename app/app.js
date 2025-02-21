const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const bodyParser = require('body-parser');

const indexRouter = require('./routes');
const organisationRouter = require('./routes/organisationsRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser);

app.use('/', indexRouter);
app.use('/organisations', organisationRouter);

module.exports = app;
