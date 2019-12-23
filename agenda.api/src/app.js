'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const patientRoute = require('./routes/patient-route');
const medicalConsultationRoute = require('./routes/medicalConsultation-route');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', patientRoute);
app.use('/patient', patientRoute);
app.use('/medicalConsultation', medicalConsultationRoute)

module.exports = app;