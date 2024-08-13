const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/services', serviceController.createService);
router.get('/services', serviceController.getAllService);
router.get('/services/:id', serviceController.getServiceById);
router.put('/services/:id', serviceController.updateService);
router.put('/services/:id', serviceController.deleteService);

module.exports = router;