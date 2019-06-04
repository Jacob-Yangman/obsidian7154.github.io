var dom2 = document.getElementById("main2");
var myChart2 = echarts.init(dom2);


var app = {};
app.title = '极坐标系下的堆叠柱状图';

var cars2 = [
    '比亚迪唐DM', '比大众帕萨特混合动力', '丰田卡罗拉双擎E+', '大众途观L混合动力', '荣威ei6', '吉利博瑞GE', 
    '吉利嘉际PHEV', '广汽新能源传祺GS4 PHEV', 'MG名爵6 混合动力', '起亚K5 PHEV', '沃尔沃XC60混合动力', 'WEYP8'];
var cardata3 = [
    '比亚迪唐DM', '比大众帕萨特', '丰田卡罗拉E+', '大众途观L', '荣威ei6', '吉利博瑞GE', 
    '吉利嘉际PHEV', '广汽传祺GS4', 'MG名爵', '起亚K5', '沃尔沃XC60', 'WEYP8'
    ];
var low = [2, 1.4, 1.8, 1.4, 1, 1.5, 1.5, 1.5, 1, 2, 2, 2];
var high = [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0];
var all = [2, 1.4, 1.8, 1.4, 1, 1.5, 1.5, 1.5, 1.5, 2, 2, 2];

option = {
    angleAxis: {
        type: 'category',
        data: cardata3,
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cars2[id] + '<br>最低：' + low[id] + 'T' + '<br>最高：' + all[id] + 'T';
        }
    },
    series: [{
        type: 'bar',
        data: low,
        coordinateSystem: 'polar',
        name: '最低排量/T',
        stack: 'a'
    },{
        type: 'bar',
        data: high,
        coordinateSystem: 'polar',
        name: '最高排量/T',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: [
            '最低排量/T', 
            '最高排量/T'
        ]
    }
};



if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}