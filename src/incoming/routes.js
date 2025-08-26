const express = require('express');
const router = express.Router();
const incomingController = require('./controller');

// SRM采购单
router.get('/srm-purchase-orders', incomingController.getSRMPurchaseOrders);
router.post('/srm-purchase-orders', incomingController.createSRMPurchaseOrder);
router.get('/srm-purchase-orders/:id', incomingController.getSRMPurchaseOrderById);
router.put('/srm-purchase-orders/:id', incomingController.updateSRMPurchaseOrder);
router.delete('/srm-purchase-orders/:id', incomingController.deleteSRMPurchaseOrder);

// 入库订单
router.get('/incoming-orders', incomingController.getIncomingOrders);
router.post('/incoming-orders', incomingController.createIncomingOrder);
router.get('/incoming-orders/:id', incomingController.getIncomingOrderById);
router.put('/incoming-orders/:id', incomingController.updateIncomingOrder);
router.delete('/incoming-orders/:id', incomingController.deleteIncomingOrder);

// 入库顾检
router.get('/inspections', incomingController.getInspections);
router.post('/inspections', incomingController.createInspection);
router.get('/inspections/:id', incomingController.getInspectionById);
router.put('/inspections/:id', incomingController.updateInspection);
router.delete('/inspections/:id', incomingController.deleteInspection);

// 入库条码表
router.get('/barcode-tables', incomingController.getBarcodeTables);
router.post('/barcode-tables', incomingController.createBarcodeTable);
router.get('/barcode-tables/:id', incomingController.getBarcodeTableById);
router.put('/barcode-tables/:id', incomingController.updateBarcodeTable);
router.delete('/barcode-tables/:id', incomingController.deleteBarcodeTable);

// 待入库暂存条码
router.get('/staging-barcodes', incomingController.getStagingBarcodes);
router.post('/staging-barcodes', incomingController.createStagingBarcode);
router.get('/staging-barcodes/:id', incomingController.getStagingBarcodeById);
router.put('/staging-barcodes/:id', incomingController.updateStagingBarcode);
router.delete('/staging-barcodes/:id', incomingController.deleteStagingBarcode);

module.exports = router;