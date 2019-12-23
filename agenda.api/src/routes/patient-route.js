'use strinct';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/patient-controller');

router.get('/GetById', controller.getById);
router.get('/List', controller.list);
router.post('/Create', controller.create);
router.post('/Edit', controller.edit);
router.delete('/Delete', controller.delete);

module.exports = router;