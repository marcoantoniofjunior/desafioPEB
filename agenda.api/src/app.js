'use strict';

const express = require('express');
const bodyParser = require('bodyParser');

const app = express();

const patientRoute = require('../src/routes/patient-route');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/patient', patientRoute);

module.exports = app;