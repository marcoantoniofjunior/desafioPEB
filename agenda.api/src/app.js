'use strict';

const express = require('express');
const bodyParser = require('bodyParser');

const app = express();

const patientRoute = require('../src/routes/patient-route');
const medicalConsultationRoute = require('../src/routes/medicalConsultation-route');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', patientRoute);
app.use('/patient', patientRoute);
app.use('/medicalConsultation', medicalConsultationRoute)

module.exports = app;