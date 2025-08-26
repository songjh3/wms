const express = require('express');
const router = express.Router();
const outgoingController = require('./controller');

// 出库订单
router.get('/outgoing-orders', outgoingController.getOutgoingOrders);
router.post('/outgoing-orders', outgoingController.createOutgoingOrder);
router.get('/outgoing-orders/:id', outgoingController.getOutgoingOrderById);
router.put('/outgoing-orders/:id', outgoingController.updateOutgoingOrder);
router.delete('/outgoing-orders/:id', outgoingController.deleteOutgoingOrder);

// 出库波次
router.get('/wave-orders', outgoingController.getWaveOrders);
router.post('/wave-orders', outgoingController.createWaveOrder);
router.get('/wave-orders/:id', outgoingController.getWaveOrderById);
router.put('/wave-orders/:id', outgoingController.updateWaveOrder);
router.delete('/wave-orders/:id', outgoingController.deleteWaveOrder);

// 撼货任务
router.get('/picking-tasks', outgoingController.getPickingTasks);
router.post('/picking-tasks', outgoingController.createPickingTask);
router.get('/picking-tasks/:id', outgoingController.getPickingTaskById);
router.put('/picking-tasks/:id', outgoingController.updatePickingTask);
router.delete('/picking-tasks/:id', outgoingController.deletePickingTask);

// 出库条码表
router.get('/barcode-tables', outgoingController.getBarcodeTables);
router.post('/barcode-tables', outgoingController.createBarcodeTable);
router.get('/barcode-tables/:id', outgoingController.getBarcodeTableById);
router.put('/barcode-tables/:id', outgoingController.updateBarcodeTable);
router.delete('/barcode-tables/:id', outgoingController.deleteBarcodeTable);

module.exports = router;