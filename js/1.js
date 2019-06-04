var dom = document.getElementById("main");
var myChart = echarts.init(dom);


var app = {};
app.title = '极坐标系下的堆叠柱状图';

var data = [
    [16.99, 29.99],
    [14.75, 26.065],
    [13.68, 23.28],
    [16.634, 25.67],
    
    [14.25, 26.53],
    [13.69, 25.69],
    [15.99, 24.99],
    [15.98, 20.68],
    
    [16.28, 22.58],
    [14.18, 22.38],
    [17.83, 23.83],
    [19.85, 24.53],
    
    [20.98, 30.58],
    [19.45, 29.05],
    [16.88, 28.84],
    [17.99, 23.99],
    
    [19.56, 24.87],
    [21.99, 32.99],
    [21.83, 29.88],
    [19.32, 31.34],
    
    [15.43, 26.45],
    [17.12, 24.23],
    [16.14, 27.89],
    [19.47, 34.56],
    [18.43, 24.56]


    
    
];
var cars = [
    '比亚迪秦EV', '比亚迪e5', '吉利博瑞GE', '比亚迪宋DM', '比亚迪宋EV', 'MG名爵6 混合动力', '吉利嘉际PHEV', 
    '东风风神E70', '吉利帝豪EV', '比亚迪唐DM', '蔚来汽车ES8', '欧拉R1', '长安逸动电动车', '欧拉iQ', '丰田雷凌双擎',
    '江淮iEV6E', '丰田凯美瑞双擎', '北汽新能源EC系列', '本田CR-V混合动力', '丰田亚洲龙双擎', '丰田卡罗拉双擎E+', 
    '华泰新能源路盛S1', '江铃集团新能源E200', '小鹏汽车G3', '荣威ei6'];

var cardata1 = [
    '比亚迪秦EV', '比亚迪e5', '吉利博瑞GE', '比亚迪宋DM', '比亚迪宋EV', 'MG名爵6', '吉利嘉际PHEV', 
    '东风风神E70', '吉利帝豪EV', '比亚迪唐DM', '蔚来汽车ES8', '欧拉R1', '长安逸动', '欧拉iQ', '丰田雷凌',
    '江淮iEV6E', '丰田凯美瑞', '北汽EC', '本田CR-V', '亚洲龙', '丰田卡罗拉E+', 
    '华泰路盛S1', '江铃E200', '小鹏G3', '荣威ei6'];
var barHeight = 50;

option = {
    // title: {
    //     text: '在中国租个房子有多贵？',
    //     subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）',
    //     textStyle: {
    //         color: '#999',
    //         fontWeight: 'normal',
	// 		fontSize: 20
    //     }
    // },
    legend: {
        show: true,
        data: ['价格范围']
    },
    grid: {
        top: 100
    },
    angleAxis: {
        type: 'category',
        data: cardata1
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cars[id] + '<br>最低：' + data[id][0] + '万元' + '<br>最高：' + data[id][1] + '万元';
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: data.map(function (d) {
            return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '报价范围',
        stack: '最大最小值'
    }],
    legend: {
        show: true,
        data: ['报价范围']
    }
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}