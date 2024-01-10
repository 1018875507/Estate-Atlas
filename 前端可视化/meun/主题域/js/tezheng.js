var chartDom1 = document.getElementById('tezheng');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
  xAxis: {
    type: 'category',
    data: ['企业平均从业人数', '企业计划总投资', '企业资产总计'],
    axisLine:{
        lineStyle:{
            color:'white',
            width:2,
        }
    },
    axisLabel  :{
        fontSize : 10
    }
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
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [0.20,0.22,0.58],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'red',
        }
      },
      axisLabel: {
        formatter: '{value}'
      },
      label: {
        show: true,
        color : 'orange',
        position: 'top',
        valueAnimation: true,
        fontSize: 30
      },
    
    }
  ]
};

option1 && myChart1.setOption(option1);