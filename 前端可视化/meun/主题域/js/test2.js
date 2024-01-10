

/*key1 = ["地区","2022年","2021年","2020年","2019年","2018年","2017年","2016年","2015年","2014年","2013年"]
var arr=new Array();
var arr1=new Array();
for(var i =0; i < data.length; i++) {
  arr.push(data[i][key1[0]]);
}
console.log(arr);
for(var j =1; j < data.length; j++) {
    for(var k =1; k < key1.length; k++) {
        arr1.push(data[j][key1[k]]);
  }}
console.log(arr1);*/
year = ["2013年","2014年","2015年","2016年","2017年","2018年","2019年","2020年","2021年","2022年"]
console.log(year);
var arr=new Array();
var arr1=new Array();
var arr2=new Array();
var arr3=new Array();
var arr4=new Array();
var arr5=new Array();
var arr6=new Array();

for(var i =0; i < data.length; i++) {
    for(var j =0; j < year.length; j++) {
    arr.push({
        'name': data[i]["地区"],
        'year' : year[j],
        'value': data[i][year[j]],
    })
}}
var barColors = [
    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
];
//arr1 = arr.filter(item => item.year == "2013年")
for(var i =0; i < data.length; i++) {
    arr2.push(data[i][key1[0]]);
  }
console.log(arr2);
/*for(var i =0; i < arr1.length; i++) {
    arr3.push(arr1[i]['value']);
}*/

for(var i =1; i < key1.length; i++) {
    arr1 = arr.filter(item => item.year == key1[i])
    for (var j=0; j < arr1.length; j++) {
        arr3.push(parseInt(arr1[j]['value']));
    }
}

for(let i =0; i < 35; i=i+35){
    arr4.push(arr3.slice(i,i+35))
}
console.log(arr4);

/*async function processArrayWithDelay() {
    for (let i =0; i < 350; i=i+35) {
      // 执行当前元素的操作
      arr4.push(arr3.slice(i,i+35))
      console.log(arr4);
      arr4 = [];
        // 等待一定时间
      await new Promise(processArrayWithDelay => setTimeout(processArrayWithDelay, 5000));
    }
  }
  
processArrayWithDelay();*/



var chartDom = document.getElementById('test');
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
    },
    yAxis: {
      type: 'category',
      data: arr2,
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 10, // only the largest 3 bars will be displayed
      nameTextStyle : {
        color: 'red',
        fontStyle :'',
      } ,
    },
    series: [
      {
        id : 'TSSQuestion',
        realtimeSort: true,
        type: 'bar',
        data: arr4[0],
        
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
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
            right: 100,
            bottom: 60,
            style: {
              text: '2022年',
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }]
        }
  };
myChart.setOption(option);
/*x = 35
y = 0
function run() {
    arr4 = []
    arr4.push(arr3.slice(x,x+35))
    x = x + 35
    if(x == 350){
        x =0
    }
    y = y+1
    if(y == 9){
        y =0
    }
    var ye = year[y]
    console.log(arr4)
    console.log(y)
    console.log(ye)
    myChart.setOption({
      series: [
        {
          type: 'bar',
          data: arr4[0],
          id : 'TSSQuestion',
          label: {
            show: true,
            position: 'right',
            valueAnimation: true
          },
          progressive : 5000,
          animation: true,
          animationDurationUpdate: 10000,
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
                position: 'end', // 文字位置
                formatter: '{b}:{c}',
                color: 'green'  // 文字颜色
              },

        },

        }
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            right: 16,
            bottom: 60,
            style: {
              text: ye,
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }]
        }
    });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 10000);*/

