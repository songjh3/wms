const express = require('express');
const router = express.Router();
const inventoryController = require('./controller');

// 库存查询
router.get('/query', inventoryController.queryInventory);

// 库存冻结
router.get('/freeze', inventoryController.getFrozenInventory);
router.post('/freeze', inventoryController.freezeInventory);
router.put('/freeze/:id', inventoryController.updateFrozenInventory);
router.delete('/freeze/:id', inventoryController.unfreezeInventory);

// 理库调整
router.get('/adjustments', inventoryController.getAdjustments);
router.post('/adjustments', inventoryController.createAdjustment);
router.get('/adjustments/:id', inventoryController.getAdjustmentById);
router.put('/adjustments/:id', inventoryController.updateAdjustment);
router.delete('/adjustments/:id', inventoryController.deleteAdjustment);

// 库存调拨
router.get('/transfers', inventoryController.getTransfers);
router.post('/transfers', inventoryController.createTransfer);
router.get('/transfers/:id', inventoryController.getTransferById);
router.put('/transfers/:id', inventoryController.updateTransfer);
router.delete('/transfers/:id', inventoryController.deleteTransfer);

// 收发明细
router.get('/transactions', inventoryController.getTransactions);
router.get('/transactions/:id', inventoryController.getTransactionById);

// 库存事务
router.get('/inventory-transactions', inventoryController.getInventoryTransactions);
router.get('/inventory-transactions/:id', inventoryController.getInventoryTransactionById);

// 库存条码表
router.get('/barcode-tables', inventoryController.getBarcodeTables);
router.post('/barcode-tables', inventoryController.createBarcodeTable);
router.get('/barcode-tables/:id', inventoryController.getBarcodeTableById);
router.put('/barcode-tables/:id', inventoryController.updateBarcodeTable);
router.delete('/barcode-tables/:id', inventoryController.deleteBarcodeTable);

module.exports = router;