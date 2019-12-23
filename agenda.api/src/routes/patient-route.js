'use strinct';

const express = require('express');
const route = express.Router();
const controller = require('../controllers/patient-controller');

route.get('/GetById', controller.getById);
route.get('/List', controller.list);
route.post('/Create', controller.create);
route.post('/Edit', controller.edit);
route.delete('/Delete', controller.delete);

module.exports = router;