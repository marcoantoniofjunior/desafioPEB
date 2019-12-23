'use strinct';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/medicalConsultation-controller');

router.get('/GetListByPatientId', controller.getListByPatientId);
router.get('/List', controller.list);
router.post('/Create', controller.create);
router.post('/Edit', controller.edit);
router.delete('/Delete', controller.delete);

module.exports = router;