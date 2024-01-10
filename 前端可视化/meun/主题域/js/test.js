var myChart1 = echarts.init(document.getElementById("test1"));
        // step4：准备配置项
        var option1 = {
            title: {
                show:true,
                text: "Echarts ",
                link:"https://www.baidu.com/"
            },
            legend: {
                data: ["销量"]
            },
            xAxis: {
                data: ['衬衫', '裤子', '高跟鞋', '袜子', '羊毛衫']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均数' }
                        ]
                    },
                    data: [5, 15, 18, 10, 20]
                }
            ]
        };
        // step5：将配置项设置给ECharts实例对象
        myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('test2'));
        // step4：准备配置项
        var option2 = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };
        // step5：将配置项设置给echarts实例对象
        myChart2.setOption(option2);
// 显示图表1的函数
function showChart1() {
    document.getElementById('test1').style.display = 'block';
    document.getElementById('test2').style.display = 'none';
}

// 显示图表2的函数
function showChart2() {
    document.getElementById('test1').style.display = 'none';
    document.getElementById('test2').style.display = 'block';
}