rate_arr = []
rate_arr1 =[]
rate_arr2 = []
rate_arr3 = []
rate_year = [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
var settings = {
    "url": "http://localhost:8080/Servlet_business_operations",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    
    rate_arr = response.filter(item => item.business === '房地产开发企业主营业务税金及附加(亿元)');
    rate_arr1 = response.filter(item => item.business === '房地产开发企业营业利润(亿元)');
    for(var i =0; i < rate_arr.length; i++){
        rate_arr2.push(rate_arr[i].number);
    }
    for(var i =0; i < rate_arr1.length; i++){
        rate_arr3.push(rate_arr1[i].number);
    }

    rate_arr2 = rate_arr2.reverse();
    rate_arr3 = rate_arr3.reverse();
    console.log(rate_arr2,rate_arr3);

    var chartDom3 = document.getElementById('rate');
    var myChart3 = echarts.init(chartDom3);
var option3;

option3 = {
  color: [ '#FF0087', '#FFBF00'],
  
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'white'
      }
    }
  },
  legend: {
    data: ['主营业务税金', '营业利润'],
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
      data: rate_year,
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
      name: '主营业务税金',
      type: 'line',
      smooth: true,
      
      markPoint:{
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
        formatter: '{b}:{c}',
        color: 'white'  // 文字颜色
      }},
      showSymbol: false,
      
      emphasis: {
        focus: 'series'
      },
      data: rate_arr2
    },
    
    {
      name: '营业利润',
      type: 'line',
      smooth: true,
      
      markPoint:{
        data: [
                { type: 'min', name: '最小值'},
                { type: 'max', name: '最大值'}],
                label: {
                    position: 'middle', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'red'  // 文字颜色
                  }
      },
      markLine:{
    data: [{ type: 'average', name: '平均值' }],
    label: {
        position: 'middle', // 文字位置
        formatter: '{b}:{c}',
        color: 'white'  // 文字颜色
      }},
      showSymbol: false,
      
      emphasis: {
        focus: 'series'
      },
      data: rate_arr3
    },
    
      
    
  ]
};
option3 && myChart3.setOption(option3);
  });