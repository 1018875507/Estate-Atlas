var chartDom = document.getElementById('huigui');
var myChart = echarts.init(chartDom);
var option;
var barColors = [
    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
];
option = {
  xAxis: {
    max:2028,
    min:2000,
    axisLine:{
        lineStyle:{
            color:'white',
            width:2
        },

  },},
  legend: {
    data: ['实际值', '预测值'],
    left: 'center',
    bottom: 10,
    textStyle:{
        color: 'white'
    },
  },
   tooltip: {
        trigger: 'axis',
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          },
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
  yAxis: {
    axisLine:{
        lineStyle:{
            color:'white',
            width:2
        },
  },},
  series: [
    { name : '实际值',
      symbolSize: 20,
     
      data: [
        [2003,2359],
        [2004,2778],
        [2005,3167.66],
        [2006,3366.79],
        [2007,3863.9],
        [2008,3800],
        [2009,4681],
        [2010,5031.65],
        [2011,5365.5],
        [2012,5816.11],
        [2013,6274.49],
        [2014,6369.76],
        [2015,6854.72],
        [2016,7565],
        [2017,8008.11],
        [2018,8859.18],
        [2019,9469.42],
        [2020,10030.17],
        [2021,10322.67],
        [2022,9991],
        
      ],
      type: 'scatter',
      itemStyle: {
        color: 'yellow',
    },
    },
    {
        name:'预测值',
        symbolSize: 20,
        type: 'scatter',
        data: [[2023,9869],
        [2024,9785],
        [2025,9658],],
        itemStyle: {
            color: 'red',
        },

    }
  ]
};

option && myChart.setOption(option);