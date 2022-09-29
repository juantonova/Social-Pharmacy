const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const reactSSR = require('../middleware/reactSSR');
const getUser = require('../middleware/getUser');

const sessionConfig = require('./sessionConfig');

module.exports = function configApp(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(reactSSR);
  app.use(getUser);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static('public'));
  app.use(express.json());
  app.use(express.static('public'));
};
