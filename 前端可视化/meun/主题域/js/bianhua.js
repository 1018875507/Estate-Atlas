var bianhua_arr1=new Array();
var bianhua_arr2=new Array();
var bianhua_arr3=new Array();
var bianhua_arr4=new Array();
var bianhua_arr5=new Array();
var settings = {
    "url": "http://localhost:8080/Servlet_house_complete_rate",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    bianhua_arr1 = response.filter(item => item.year ==='2013');
    
    bianhua_arr2  = bianhua_arr1.map(item => ({
        name: item.city,
        value: item.constructed,
      }));
      var barColors = [
        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ];
    for(var i =0; i < bianhua_arr2.length; i++) {
        bianhua_arr3.push(bianhua_arr2[i].value);
      }
      for(var i =0; i < bianhua_arr2.length; i++) {
        bianhua_arr4.push(bianhua_arr2[i].name);
      }
      bianhua_year = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]
      var chartDom = document.getElementById('bianhua');
      var myChart = echarts.init(chartDom);
      var option;
      
      option = {
          xAxis: {
            type: 'value',  
            max: 30000,
            textStyle: {
              color: function (param) {
                  return barColors[param.dataIndex] || '#5470c6';
              }
          },
          axisLine:{
            lineStyle:{
                color:'orange',
                width:2
            }
        },axisLabel :{
          fontSize : 20
      },
          },
          yAxis: {
            type: 'category',
            data: bianhua_arr4,
            inverse: true,    
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 10, // only the largest 3 bars will be displayed
            axisLine:{
                lineStyle:{
                    color:'yellow',
                    width:2
                }
            },
            axisLabel  :{
              fontSize : 20
          },
            
          },
          series: [
            {
              id : 'TSSQuestion',
              realtimeSort: true,
              type: 'bar',
              data: bianhua_arr3,
              
              label: {
                show: true,
                color : 'orange',
                position: 'right',
                valueAnimation: true,
                fontSize: 20
              },
              itemStyle: {
                  color: function (param) {
                      return barColors[param.dataIndex] || '#5470c6';
                  }
              },
            }
          ],
          animation: true,
          tionDuration: 0,
          animationDurationUpdate: 10000,
          animationEasing: 'linear',
          animationEasingUpdate: 'linear',
          graphic: {
              elements: [
                {
                  type: 'text',
                  right: 70,
                  bottom: 150,
                  style: {
                    text: '2013年',
                    font: 'bolder 80px monospace',
                    fill: 'rgba(100, 100, 100, 0.25)'
                  },
                  z: 100
                }]
              }
        };
      myChart.setOption(option);
      bianhua_x = 1
      function run() {
        if(bianhua_x == 10)
        {
            bianhua_x=0;
        }
        bianhua_arr1 =[]
        bianhua_arr2 =[]
        bianhua_arr3 =[]
        bianhua_arr4 =[]
        bianhua_arr1 = response.filter(item => item.year === bianhua_year[bianhua_x]);
        bianhua_arr2  = bianhua_arr1.map(item => ({
            name: item.city,
            value: item.constructed,
          }));
          for(var i =0; i < bianhua_arr2.length; i++) {
            bianhua_arr3.push(bianhua_arr2[i].value);
          }
          
        myChart.setOption({
          series: [
            {
              type: 'bar',
              data: bianhua_arr3,
              id : 'TSSQuestion',
              
              label: {
                show: true,
                position: 'right',
                valueAnimation: true
              },
              progressive : 5000,
              animation: true,
              animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear',
              markLine:{
                data: [{ type: 'average', name: '平均值' },
                        {
                            // 起点和终点的项会共用一个 name
                            name: '最小值',
                            type: 'min'
                        },
                        {
                            name: '最大值',
                            type: 'max'
                        }],
                label: {
                    position: 'start', // 文字位置
                    formatter: '{b}:{c}',
                    color: 'orange' , // 文字颜色
                    fontSize: 20
                  },
    
            },
    
            }
          ],
          graphic: {
            elements: [
              {
                type: 'text',
                right: 70,
                bottom: 150,
                style: {
                  text: bianhua_year[bianhua_x]+'年',
                  font: 'bolder 80px monospace',
                  fill: 'white'
                },
                z: 100
              }]
            }
        });
        bianhua_x = bianhua_x +1
      }
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 3000);   
      

  });