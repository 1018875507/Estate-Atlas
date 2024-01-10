var chartDom1 = document.getElementById('fuzhai');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
  xAxis: {
    type: 'category',
    data: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
    axisLine:{
      lineStyle:{
          color:'white',
          width:2
      }
  },
  },
  yAxis: {
    type: 'value',
    scale: true,
    axisLine:{
      lineStyle:{
          color:'white',
          width:2,
          
      }
  },
   
  },
  tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      }, 
  series: [
    {
      data: [76,77,77.7,78.3,79.1,79.1,80.4,80.7,80.3,79.1],
      
      type: 'line',
      smooth: true,
      lineStyle: { // 设置线条的style等
        normal: {
        color: 'orange', // 折线线条颜色:红色
       },
     },
      markPoint:{
      
        symbolSize : [30,30],
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'start', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white'  ,// 文字颜色
                    fontSize: 15
                  }
      },
      markLine:{
    data: [{ type: 'average', name: '平均值' }],
    label: {
        position: 'middle', // 文字位置
        formatter: '{b}:{c}',
        color: 'white',  // 文字颜色
        fontSize: 15,
      }},
      
    }
  ]
};

option1 && myChart1.setOption(option1);