var arr=new Array();
var arr1=new Array();
var arr2=new Array();
var arr3=new Array();
var arr4=new Array();
var arr5=new Array();
var year2 =   new Array();
var settings = {
    "url": "http://localhost:8080/Servlet_annual_data",
    "method": "GET",
    "timeout": 0,
    
    
  };
  
  $.ajax(settings).done(function (response) {
    arr = response.filter(item => item.business === '商品房平均销售价格(元/平方米)');
    arr1 = response.filter(item => item.business === '商品房销售面积(万平方米)');
    arr2 = response.filter(item => item.business === '商品房销售额(亿元)');
    /*console.log(response);*/
    for(var i =0; i < arr1.length; i++){
        year2.push(arr[i].year);
    }
    
    for(var i =0; i < arr.length; i++){
        arr3.push(arr[i].number);
    }
    
    for(var i =0; i < arr1.length; i++){
        arr4.push(arr1[i].number);
    }
    
    for(var i =0; i < arr2.length; i++){
        arr5.push(arr2[i].number);
    }
    
    arr5 = arr5.reverse();
    arr4 = arr4.reverse();
    arr3 = arr3.reverse();
    year2 = year2.reverse();
    console.log(year);
    
    var chartDom = document.getElementById('time1');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    top: '10%',
    
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      
    }
  },
  legend: {
    data: ['商品房平均销售价格(元/平方米)', '商品房销售面积(万平方米)', '商品房销售额(亿元)']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        }
      },
      // prettier-ignore
      data: year2
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '平均价格',
      position: 'right',
      alignTicks: true,
      
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        }
      },
      axisLabel: {
        formatter: '{value}'
      }
    },
    /*{
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
    {
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
    {
      name: '平均价格',
      type: 'bar',
      data: arr3,
     /* label: {
        show: true,
        color : 'orange',
        position: 'top',
        valueAnimation: true,
        fontSize: 12
      },*/
      markPoint:{
      
        symbolSize : [50,50],
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'start', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white',  // 文字颜色
                    fontSize: 20,
                  }
      },
    },
    /*{
      name: '销售面积',
      type: 'bar',
      yAxisIndex: 1,
      data: arr4
    },
    {
      name: '销售额',
      type: 'line',
      yAxisIndex: 2,
      data: arr5
    }*/
  ]
};

var chartDom1 = document.getElementById('time2');
var myChart1 = echarts.init(chartDom1);
var option1;


option1 = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
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
  legend: {
    data: ['商品房平均销售价格(元/平方米)', '商品房销售面积(万平方米)', '商品房销售额(亿元)']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        }
      },
      // prettier-ignore
      data: year2
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
      },
      
    
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
      data: arr3
    },*/
    {
      name: '销售面积',
      type: 'bar',
      data: arr4,
      itemStyle: {
        color: 'red',
    },
      markPoint:{
      
        
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'start', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white' , // 文字颜色
                    fontSize: 20,
                  }
      },
      
    
    },
    /*{
      name: '销售额',
      type: 'line',
      yAxisIndex: 2,
      data: arr5
    }*/
  ]
};

var chartDom2 = document.getElementById('time3');
var myChart2 = echarts.init(chartDom2);
var option2;


option2 = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
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
  legend: {
    data: ['商品房平均销售价格(元/平方米)', '商品房销售面积(万平方米)', '商品房销售额(亿元)']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white',
        }
      },
      // prettier-ignore
      data: year2
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
    /*{
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
    },*/
    {
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
      },
      itemStyle: {
        color: 'orange',
    },
    }
  ],
  series: [
    /*{
      name: '平均价格',
      type: 'bar',
      data: arr3
    },*/
    /*{
      name: '销售面积',
      type: 'bar',
      data: arr4
    },*/
    {
      name: '销售额',
      type: 'line',
      lineStyle: { // 设置线条的style等
        normal: {
        color: 'red', // 折线线条颜色:红色
       },
     },
      data: arr5,
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

option && myChart.setOption(option);
option1 && myChart1.setOption(option1);
option2 && myChart2.setOption(option2);
  });





