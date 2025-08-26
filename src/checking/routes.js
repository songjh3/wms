const express = require('express');
const router = express.Router();
const checkingController = require('./controller');

// 盘点管理
router.get('/inventory-checks', checkingController.getInventoryChecks);
router.post('/inventory-checks', checkingController.createInventoryCheck);
router.get('/inventory-checks/:id', checkingController.getInventoryCheckById);
router.put('/inventory-checks/:id', checkingController.updateInventoryCheck);
router.delete('/inventory-checks/:id', checkingController.deleteInventoryCheck);
router.post('/inventory-checks/:id/start', checkingController.startInventoryCheck);
router.post('/inventory-checks/:id/complete', checkingController.completeInventoryCheck);
router.get('/inventory-checks/:id/results', checkingController.getInventoryCheckResults);

module.exports = router;