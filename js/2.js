var dom1 = document.getElementById("main1");
var myChart1 = echarts.init(dom1);


var app = {};
app.title = '极坐标系下的堆叠柱状图';

var cars1 = [
    '荣威Ei5', '比亚迪元EV', '比亚迪e5', '吉利帝豪EV', '欧拉R1', '长安逸动电动车', '欧拉iQ', 
    '江淮iEV6E', '北汽新能源EC系列', '华泰新能源路盛S1', '比亚迪唐EV', '江淮iEV'];
var cardata2 = [
    '荣威Ei5', '比亚迪元EV', '比亚迪e5', '吉利帝豪EV', '欧拉R1', '长安逸动', '欧拉iQ', 
    '江淮iEV6E', '北汽EC', '路盛S1', '比亚迪唐EV', '江淮iEV'
];
var less = [420, 305, 480, 400, 351, 300, 401, 310, 171, 255, 500, 200];
var more = [0, 105, 0, 0, 0, 105, 0, 10, 130, 0, 20, 102];
var all1 = [420, 410, 480, 400, 351, 405, 401, 320, 301, 255, 520, 302]

option = {
    angleAxis: {
        type: 'category',
        data: cardata2,
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
            return cars1[id] + '<br>最小：' + less[id] + 'km' + '<br>最大：' + all1[id] + 'km';
        }
    },
    series: [{
        type: 'bar',
        data: less,
        coordinateSystem: 'polar',
        name: '最小续航里程/km',
        stack: 'a'
    },{
        type: 'bar',
        data: more,
        coordinateSystem: 'polar',
        name: '最大续航里程/km',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['最小续航里程/km', '最大续航里程/km']
    }
};



if (option && typeof option === "object") {
    myChart1.setOption(option, true);
}