const express = require('express');
const router = express.Router();
const masterdataController = require('./controller');

// 泛辑仓管理
router.get('/logical-warehouses', masterdataController.getLogicalWarehouses);
router.post('/logical-warehouses', masterdataController.createLogicalWarehouse);
router.get('/logical-warehouses/:id', masterdataController.getLogicalWarehouseById);
router.put('/logical-warehouses/:id', masterdataController.updateLogicalWarehouse);
router.delete('/logical-warehouses/:id', masterdataController.deleteLogicalWarehouse);

// 浸辑仓管理
router.get('/physical-warehouses', masterdataController.getPhysicalWarehouses);
router.post('/physical-warehouses', masterdataController.createPhysicalWarehouse);
router.get('/physical-warehouses/:id', masterdataController.getPhysicalWarehouseById);
router.put('/physical-warehouses/:id', masterdataController.updatePhysicalWarehouse);
router.delete('/physical-warehouses/:id', masterdataController.deletePhysicalWarehouse);

// 库区管理
router.get('/zones', masterdataController.getZones);
router.post('/zones', masterdataController.createZone);
router.get('/zones/:id', masterdataController.getZoneById);
router.put('/zones/:id', masterdataController.updateZone);
router.delete('/zones/:id', masterdataController.deleteZone);

// 库位管理
router.get('/locations', masterdataController.getLocations);
router.post('/locations', masterdataController.createLocation);
router.get('/locations/:id', masterdataController.getLocationById);
router.put('/locations/:id', masterdataController.updateLocation);
router.delete('/locations/:id', masterdataController.deleteLocation);

// 逗辑仓与财务仓对照
router.get('/warehouse-mappings', masterdataController.getWarehouseMappings);
router.post('/warehouse-mappings', masterdataController.createWarehouseMapping);
router.get('/warehouse-mappings/:id', masterdataController.getWarehouseMappingById);
router.put('/warehouse-mappings/:id', masterdataController.updateWarehouseMapping);
router.delete('/warehouse-mappings/:id', masterdataController.deleteWarehouseMapping);

// 货品管理
router.get('/products', masterdataController.getProducts);
router.post('/products', masterdataController.createProduct);
router.get('/products/:id', masterdataController.getProductById);
router.put('/products/:id', masterdataController.updateProduct);
router.delete('/products/:id', masterdataController.deleteProduct);

// 波次策略
router.get('/wave-strategies', masterdataController.getWaveStrategies);
router.post('/wave-strategies', masterdataController.createWaveStrategy);
router.get('/wave-strategies/:id', masterdataController.getWaveStrategyById);
router.put('/wave-strategies/:id', masterdataController.updateWaveStrategy);
router.delete('/wave-strategies/:id', masterdataController.deleteWaveStrategy);

// 质检模板
router.get('/inspection-templates', masterdataController.getInspectionTemplates);
router.post('/inspection-templates', masterdataController.createInspectionTemplate);
router.get('/inspection-templates/:id', masterdataController.getInspectionTemplateById);
router.put('/inspection-templates/:id', masterdataController.updateInspectionTemplate);
router.delete('/inspection-templates/:id', masterdataController.deleteInspectionTemplate);

// 上架簇略
router.get('/putaway-strategies', masterdataController.getPutawayStrategies);
router.post('/putaway-strategies', masterdataController.createPutawayStrategy);
router.get('/putaway-strategies/:id', masterdataController.getPutawayStrategyById);
router.put('/putaway-strategies/:id', masterdataController.updatePutawayStrategy);
router.delete('/putaway-strategies/:id', masterdataController.deletePutawayStrategy);

module.exports = router;