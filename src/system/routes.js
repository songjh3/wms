const express = require('express');
const router = express.Router();
const systemController = require('./controller');

// 数据字典
router.get('/dictionaries', systemController.getDictionaries);
router.post('/dictionaries', systemController.createDictionary);
router.get('/dictionaries/:id', systemController.getDictionaryById);
router.put('/dictionaries/:id', systemController.updateDictionary);
router.delete('/dictionaries/:id', systemController.deleteDictionary);
router.get('/dictionaries/:id/items', systemController.getDictionaryItems);
router.post('/dictionaries/:id/items', systemController.createDictionaryItem);

// 菜单管理
router.get('/menus', systemController.getMenus);
router.post('/menus', systemController.createMenu);
router.get('/menus/:id', systemController.getMenuById);
router.put('/menus/:id', systemController.updateMenu);
router.delete('/menus/:id', systemController.deleteMenu);
router.get('/menus/tree', systemController.getMenuTree);

// 角色管理
router.get('/roles', systemController.getRoles);
router.post('/roles', systemController.createRole);
router.get('/roles/:id', systemController.getRoleById);
router.put('/roles/:id', systemController.updateRole);
router.delete('/roles/:id', systemController.deleteRole);
router.get('/roles/:id/permissions', systemController.getRolePermissions);
router.post('/roles/:id/permissions', systemController.updateRolePermissions);

// 用户管理
router.get('/users', systemController.getUsers);
router.post('/users', systemController.createUser);
router.get('/users/:id', systemController.getUserById);
router.put('/users/:id', systemController.updateUser);
router.delete('/users/:id', systemController.deleteUser);
router.get('/users/:id/roles', systemController.getUserRoles);
router.post('/users/:id/roles', systemController.updateUserRoles);
router.post('/users/login', systemController.login);
router.post('/users/logout', systemController.logout);

module.exports = router;