const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// 路由导入
const incomingRoutes = require('./incoming/routes');
const outgoingRoutes = require('./outgoing/routes');
const inventoryRoutes = require('./inventory/routes');
const checkingRoutes = require('./checking/routes');
const masterdataRoutes = require('./masterdata/routes');
const systemRoutes = require('./system/routes');

// 路由使用
app.use('/api/incoming', incomingRoutes);
app.use('/api/outgoing', outgoingRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/checking', checkingRoutes);
app.use('/api/masterdata', masterdataRoutes);
app.use('/api/system', systemRoutes);

// 首页路由
app.get('/', (req, res) => {
  res.send('WMS System is running!');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`WMS System listening at http://localhost:${PORT}`);
});

module.exports = app;