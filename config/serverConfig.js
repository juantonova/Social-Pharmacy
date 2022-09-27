const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const reactSSR = require('../middleware/reactSSR');

const sessionConfig = require('./sessionConfig');

module.exports = function configApp(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(reactSSR);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static('public'));
};
