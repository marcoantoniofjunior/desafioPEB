'use strinct';

const express = require('express');
const route = express.Router();
const controller = require('../controllers/medicalConsultation-controller');

route.get('/getListByPatientId', controller.getListByPatientId);
route.get('/list', controller.list);
route.post('/create', controller.create);
route.post('/edit', controller.edit);
route.delete('/delete', controller.delete);

module.exports = router;