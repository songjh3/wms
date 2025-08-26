// 创建Vue实例
new Vue({
    el: '#app',
    data: {
        orders: [], // 订单列表数据
        searchParams: { // 搜索参数
            orderNo: '',
            supplier: '',
            status: ''
        },
        showDetailModal: false, // 是否显示订单明细弹窗
        currentOrder: {} // 当前选中的订单
    },
    mounted() {
        // 页面加载完成后，加载订单数据
        this.loadOrders();
    },
    methods: {
        // 加载订单数据
        loadOrders() {
            // 模拟API请求
            setTimeout(() => {
                this.orders = [
                    {
                        id: 1,
                        orderNo: 'PO2023001',
                        supplier: '供应商A',
                        orderDate: '2023-05-15',
                        amount: '¥12,500.00',
                        status: 'approved',
                        contactPerson: '张三',
                        contactPhone: '13800138000',
                        items: [
                            {
                                id: 101,
                                productCode: 'P001',
                                productName: '商品A',
                                specification: '规格A',
                                unit: '个',
                                quantity: 100,
                                unitPrice: '¥100.00',
                                amount: '¥10,000.00'
                            },
                            {
                                id: 102,
                                productCode: 'P002',
                                productName: '商品B',
                                specification: '规格B',
                                unit: '个',
                                quantity: 50,
                                unitPrice: '¥50.00',
                                amount: '¥2,500.00'
                            }
                        ]
                    },
                    {
                        id: 2,
                        orderNo: 'PO2023002',
                        supplier: '供应商B',
                        orderDate: '2023-05-20',
                        amount: '¥8,700.00',
                        status: 'pending',
                        contactPerson: '李四',
                        contactPhone: '13900139000',
                        items: [
                            {
                                id: 201,
                                productCode: 'P003',
                                productName: '商品C',
                                specification: '规格C',
                                unit: '个',
                                quantity: 30,
                                unitPrice: '¥150.00',
                                amount: '¥4,500.00'
                            },
                            {
                                id: 202,
                                productCode: 'P004',
                                productName: '商品D',
                                specification: '规格D',
                                unit: '个',
                                quantity: 20,
                                unitPrice: '¥210.00',
                                amount: '¥4,200.00'
                            }
                        ]
                    },
                    {
                        id: 3,
                        orderNo: 'PO2023003',
                        supplier: '供应商C',
                        orderDate: '2023-05-25',
                        amount: '¥23,100.00',
                        status: 'completed',
                        contactPerson: '王五',
                        contactPhone: '13700137000',
                        items: [
                            {
                                id: 301,
                                productCode: 'P005',
                                productName: '商品E',
                                specification: '规格E',
                                unit: '个',
                                quantity: 150,
                                unitPrice: '¥120.00',
                                amount: '¥18,000.00'
                            },
                            {
                                id: 302,
                                productCode: 'P006',
                                productName: '商品F',
                                specification: '规格F',
                                unit: '个',
                                quantity: 25,
                                unitPrice: '¥204.00',
                                amount: '¥5,100.00'
                            }
                        ]
                    },
                    {
                        id: 4,
                        orderNo: 'PO2023004',
                        supplier: '供应商A',
                        orderDate: '2023-06-01',
                        amount: '¥5,600.00',
                        status: 'rejected',
                        contactPerson: '赵六',
                        contactPhone: '13600136000',
                        items: [
                            {
                                id: 401,
                                productCode: 'P007',
                                productName: '商品G',
                                specification: '规格G',
                                unit: '个',
                                quantity: 40,
                                unitPrice: '¥140.00',
                                amount: '¥5,600.00'
                            }
                        ]
                    }
                ];
            }, 500);
        },

        // 搜索订单
        searchOrders() {
            // 在实际应用中，这里应该发送API请求
            // 为了演示，我们使用模拟数据并进行本地过滤
            const filteredOrders = this.orders.filter(order => {
                return (
                    (this.searchParams.orderNo === '' || order.orderNo.includes(this.searchParams.orderNo)) &&
                    (this.searchParams.supplier === '' || order.supplier.includes(this.searchParams.supplier)) &&
                    (this.searchParams.status === '' || order.status === this.searchParams.status)
                );
            });

            // 模拟API请求延迟
            setTimeout(() => {
                this.orders = filteredOrders;
            }, 300);
        },

        // 重置搜索条件
        resetSearch() {
            this.searchParams = {
                orderNo: '',
                supplier: '',
                status: ''
            };
            this.loadOrders(); // 重新加载所有订单
        },

        // 查看订单明细
        viewOrderDetails(order) {
            this.currentOrder = order;
            this.showDetailModal = true;
        },

        // 获取状态文本
        getStatusText(status) {
            const statusMap = {
                'pending': '待处理',
                'approved': '已批准',
                'rejected': '已拒绝',
                'completed': '已完成'
            };
            return statusMap[status] || status;
        }
    }
});