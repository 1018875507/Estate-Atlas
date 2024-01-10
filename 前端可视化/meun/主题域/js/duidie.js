var duidie_year =   new Array();
duidie_arr = []
duidie_arr1 =[]
duidie_arr2 = []
duidie_arr3 = []
duidie_arr4 = []
duidie_arr5 =[]
duidie_arr6 = []
duidie_arr7 = []
var settings = {
    "url": "http://localhost:8080/Servlet_business_operations",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    duidie_arr = response.filter(item => item.business === '房地产开发企业房屋出租收入(亿元)');
    duidie_arr1 = response.filter(item => item.business === '房地产开发企业土地转让收入(亿元)');
    duidie_arr2 = response.filter(item => item.business === '房地产开发企业商品房销售收入(亿元)');
    duidie_arr3 = response.filter(item => item.business === '房地产开发企业其他收入(亿元)');
    for(var i =0; i < duidie_arr.length; i++){
        duidie_year.push(duidie_arr[i].year);
    }
    for(var i =0; i < duidie_arr.length; i++){
        duidie_arr4.push(duidie_arr[i].number);
    }
    for(var i =0; i < duidie_arr.length; i++){
        duidie_arr5.push(duidie_arr1[i].number);
    }
    for(var i =0; i < duidie_arr.length; i++){
        duidie_arr6.push(duidie_arr2[i].number);
    }
    for(var i =0; i < duidie_arr.length; i++){
        duidie_arr7.push(duidie_arr3[i].number);
    }
    duidie_year = duidie_year.reverse();
    duidie_arr4 = duidie_arr4.reverse();
    duidie_arr5 = duidie_arr5.reverse();
    duidie_arr6 = duidie_arr6.reverse();
    duidie_arr7 = duidie_arr7.reverse();
    var chartDom = document.getElementById('duidie');
var myChart = echarts.init(chartDom);
var option;

option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['企业商品房销售收入(亿元)', '企业土地转让收入(亿元)' , '企业其他收入(亿元)','出租收入(亿元)'],
    textStyle:{
      color: 'white'
  },
  
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: duidie_year,
      axisLine:{
        lineStyle:{
            color:'white',
            width:2
        }
    },
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      axisLine:{
        lineStyle:{
            color:'white',
            width:2
        }
    },
    }
  ],
  
  series: [
    {
      name: '企业土地转让收入(亿元)',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      markPoint:{
      
        symbolSize : [30,30],
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'start', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white'  // 文字颜色
                  }
      },
      markLine:{
    data: [{ type: 'average', name: '平均值' }],
    label: {
        position: 'middle', // 文字位置
        formatter: '{b}:{c}',
        color: 'rgb(0, 221, 255)'  // 文字颜色
      }},
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: duidie_arr5
    },
    {
      name: '企业商品房销售收入(亿元)',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      markPoint:{
        symbolOffset  : [10,10 ],
        symbolSize : [30,30],
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'end', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white'  // 文字颜色
                  }
      },
      markLine:{
    data: [{ type: 'average', name: '平均值' }],
    label: {
        position: 'middle', // 文字位置
        formatter: '{b}:{c}',
        color: 'green'  // 文字颜色
      }},
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: duidie_arr6
    },
    {
      name: '企业其他收入(亿元)',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      markPoint:{
        symbolOffset  : [0,30 ],
        symbolSize : [30,30],
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'middle', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'white'  // 文字颜色
                  }
      },
      markLine:{
    data: [{ type: 'average', name: '平均值' }],
    distance: [40,40],
    label: {
        position: 'middle', // 文字位置
        formatter: '{b}:{c}',
        color: 'white'  // 文字颜色
      }},
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: duidie_arr7
    },
    {
        name: '出租收入(亿元)',
        type: 'line',
        stack: 'Total',
        smooth: true,
        markPoint:{
          symbolSize : [30,30],
          data: [
                  { type: 'min', name: '最小值'},
                  { type: 'max', name: '最大值'}],
                  label: {
                      position: 'middle', // 文字位置
                      formatter: '{b}:{c}',
                      color: 'white'  // 文字颜色
                    }
        },
        markLine:{
      data: [{ type: 'average', name: '平均值' }],
      label: {
          position: 'middle', // 文字位置
          distance: [20,20],
          formatter: '{b}:{c}',
          color: 'red'  // 文字颜色
        }},
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: duidie_arr4
      },
      
    
  ]
};
option && myChart.setOption(option);
});