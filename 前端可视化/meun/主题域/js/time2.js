
var time2_arr2=new Array();
var time2_arr3=new Array();
var time2_year2 =   new Array();
var settings = {
    "url": "http://localhost:8080/Servlet_annual_data",
    "method": "GET",
    "timeout": 0,
    
    
  };
  
  $.ajax(settings).done(function (response) {
    
    time2_arr2 = response.filter(item => item.business === '商品房销售面积(万平方米)');
   
    /*console.log(response);*/
    for(var i =0; i < time2_arr2.length; i++){
      time2_year2.push(time2_arr2[i].year);
    }
    
    for(var i =0; i < time2_arr2.length; i++){
      time2_arr3.push(time2_arr2[i].number);
    }
    
    
    time2_arr3 = time2_arr3.reverse();
    time2_year2 = time2_year2.reverse();
    
    var chartDom = document.getElementById('time1');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
  }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: time2_year2
    }
  ],
  yAxis: [
    /*{
      type: 'value',
      name: '平均价格',
      position: 'right',
      alignTicks: true,
      
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },*/
    {
      type: 'value',
      name: '销售面积',
      position: 'right',
      alignTicks: true,
      offset: 50,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
    /*{
      type: 'value',
      name: '销售额',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    }*/
  ],
  series: [
    /*{
      name: '平均价格',
      type: 'bar',
      data: 
    },*/
    {
      name: '销售面积',
      type: 'bar',
      yAxisIndex: 1,
      data: time2_arr3
    },
    /*{
      name: '销售额',
      type: 'line',
      yAxisIndex: 2,
      data: arr5
    }*/
  ]
};

option && myChart.setOption(option);
  });





