const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// 创建Express应用
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件服务 - 指向public目录
app.use(express.static(path.join(__dirname, 'public')));

// 导入各模块路由
const incomingRoutes = require('./src/incoming/routes');
const outgoingRoutes = require('./src/outgoing/routes');
const inventoryRoutes = require('./src/inventory/routes');
const checkingRoutes = require('./src/checking/routes');
const masterdataRoutes = require('./src/masterdata/routes');
const systemRoutes = require('./src/system/routes');

// 简单的用户认证中间件
const authenticate = (req, res, next) => {
    // 公开的API路由不需要认证
    const publicApiRoutes = ['/api/system/users/login'];
    
    // 对于API路由，检查是否需要认证
    if (req.path.startsWith('/api/')) {
        if (publicApiRoutes.some(route => req.path.startsWith(route))) {
            return next();
        }
        
        // 简单的token验证
        const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.body.token;
        if (token && token === 'valid-token') {
            return next();
        }
        
        return res.status(401).json({ message: '未授权，请先登录' });
    }
    
    // 对于页面路由，让前端处理重定向
    next();
};

// 对API路由应用认证中间件
app.use('/api', authenticate);

// 使用API路由
app.use('/api/incoming', incomingRoutes);
app.use('/api/outgoing', outgoingRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/checking', checkingRoutes);
app.use('/api/masterdata', masterdataRoutes);
app.use('/api/system', systemRoutes);

// 处理所有未匹配的路由，指向index.html（前端路由）
app.get('*', (req, res) => {
    // 确保dashboard.html可以直接访问
    if (req.path === '/dashboard.html') {
        res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
        return;
    }
    
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: '服务器错误' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`WMS仓库管理系统服务器运行在 http://localhost:${PORT}`);
});

module.exports = app;