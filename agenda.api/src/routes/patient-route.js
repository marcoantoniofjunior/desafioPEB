'use strinct';

const express = require('express');
const route = express.Router();
const controller = require('../controllers/patient-controller');

route.get('/GetById', controller.getById);
route.get('/', controller.get);
route.post('/', controller.create);
route.delete('/:id', controller.delete);

module.exports = router;