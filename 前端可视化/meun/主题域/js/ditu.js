var arr=new Array();
var arr1=new Array();
var arr2=new Array();
year = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]
var settings = {
    "url": "http://localhost:8080/Servlet_regional_house",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    
    arr = response.filter(item => item.year ==='2013');
    document.getElementById('china_map').removeAttribute('_echarts_instance_');
    document.getElementById('china_map1').removeAttribute('_echarts_instance_');
    var myChart = echarts.init(document.getElementById('china_map'));
    const data1 = arr.map(item => ({
        name: item.city.slice(0, 2),
        value: item.price,
      }));
      // 要替换的键名
// 要修改的键名、旧值和新值
var keyToModify = 'name';
var oldValue = '黑龙';
var newValue = '黑龙江';

// 使用 map 修改特定键的值
var newArrayWithModifiedValue = data1.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});

var keyToModify = 'name';
var oldValue = '内蒙';
var newValue = '内蒙古';

// 使用 map 修改特定键的值
 newArrayWithModifiedValue1 = newArrayWithModifiedValue.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});
console.log(newArrayWithModifiedValue1)
var mapoption = {
    title: {
        text: '各省份商品房单价',
        textStyle: {
            color: 'white',
            fontStyle: 'oblique',
            fontSize: 30,

        },
        left: 'center',
        top: '40px'

    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 'left',
        y: 'top',
        textStyle: {
            fontSize: 20,
            color: 'white',
        },
        splitList: [{
            start: 3000,
            end: 5000
        },
        {
            start: 5000,
            end: 7000
        },
        {
            start: 7000,
            end: 9000
        },
        {
            start: 9000,
            end: 12000
        },
        {
            start: 12001,
            
        },
        
    ],
        color: ['#ff0000', '#FF9912', '#F0F06F','#00CC00','#0E94EB',]
    },
    series: [{
        name: '商品房平均销售价格(元/平方米)',
        id: 'population',
        type: 'map',
        mapType: 'china',
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 12,
            },
            emphasis: {
                show: true,
                fontSize: 20,
            }
        },
        data: newArrayWithModifiedValue1, /**/
        animationDurationUpdate: 1000,
        universalTransition: true,
        
    }],
    graphic: {
            elements: [
              {
                type: 'text',
            right: 100,
            bottom: 60,
            style: {
              text: '2013年',
              font: 'bolder 80px monospace',
              fill: 'white'
            },
            z: 100
              }]
            },
};
myChart.setOption(mapoption);
myChart.on('click',function(params){
    var selectedRegion = params.name;
    
    window.location.href = 'route1.html'+'?region=' + selectedRegion;
})
a = 1 
function run() {
    if(a ==9){
    a=0
}
    arr = response.filter(item => item.year === year[a]);

    const data1 = arr.map(item => ({
        name: item.city.slice(0, 2),
        value: item.price,
      }));
      // 要替换的键名
// 要修改的键名、旧值和新值
var keyToModify = 'name';
var oldValue = '黑龙';
var newValue = '黑龙江';

// 使用 map 修改特定键的值
var newArrayWithModifiedValue = data1.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});

var keyToModify = 'name';
var oldValue = '内蒙';
var newValue = '内蒙古';

// 使用 map 修改特定键的值
 newArrayWithModifiedValue1 = newArrayWithModifiedValue.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});

a = a+1;

    myChart.setOption({
      series: [
        {
          data: newArrayWithModifiedValue1,

        }
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            right: 70,
            bottom: 150,
            style: {
              text: year[a]+'年',
              font: 'bolder 80px monospace',
              fill: 'white'
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
  }, 3000);


  });